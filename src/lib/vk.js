import connect from '@vkontakte/vkui-connect';

const devMode = process.env.NODE_ENV === 'development';

// TODO: move this to a configurable option
// const applicationId = 7017221; // development id
const applicationId = 7040167;

export function setupVkIntegration(integrationCallback) {
  if (devMode) {
    integrationCallback(new Vk({ sex: 0 }, 'dev-access-token'));
    return;
  }

  let user = null, accessToken = null;

  function initCallback({ detail: { data, type } }) {
    switch (type) {
      case 'VKWebAppGetUserInfoResult':
        user = data;
        connect.send("VKWebAppGetAuthToken", { app_id: applicationId });
        break;
      case 'VKWebAppAccessTokenFailed':
        connect.send("VKWebAppGetAuthToken", { app_id: applicationId });
        break;
      case 'VKWebAppAccessTokenReceived':
        accessToken = data.access_token;
        connect.unsubscribe(initCallback);
        integrationCallback(new Vk(user, accessToken));
        break;
    }
  }

  connect.subscribe(initCallback);
  connect.send('VKWebAppGetUserInfo', {});
}

export class Vk {
  constructor(user, accessToken) {
    this.user = {
      firstName: user.first_name || 'Странник',
      gender: user.sex === 1 ? 'female' : 'male'
    };
    this.accessToken = accessToken;
    this.callbacks = {};
    connect.subscribe(this.handleResponse);
  }

  storage = {
    set: (key, value) => new Promise((resolve) => {
      if (devMode)
        resolve(localStorage.setItem(key, value));
      else
        this.send('VKWebAppCallAPIMethod', {
          method: 'storage.set', params: {
            key, value, user_id: this.user.id, access_token: this.accessToken, v: '5.95'
          }
        }, {
          VKWebAppCallAPIMethodResult: resolve
        });
    }),
    get: (key) => new Promise((resolve) => {
      if (devMode)
        resolve(localStorage.getItem(key))
      else
        this.send('VKWebAppCallAPIMethod', {
          method: 'storage.get', params: {
            key, user_id: this.user.id, access_token: this.accessToken, v: '5.95'
          }
        }, {
          VKWebAppCallAPIMethodResult: ({ response }) => resolve(response)
        });
    })
  }

  /* callbacks is an object of { event type (string): callback function } */
  send = (method, args, callbacks) => {
    this.callbacks = callbacks;
    if (!devMode) {
      connect.send(method, args);
    }
    else {
      /* In development mode, we need to mock API responses */
      if (method === 'VKWebAppOpenQR') {
        this.tryInvokeEventCallback('VKWebAppOpenQRResult', { qr_data: 'test' });
      }
    }
  }

  handleResponse = ({ detail: { type, data } }) => {
    this.tryInvokeEventCallback(type, data) || console.log(`Unhandled connect event: ${type}`);
  }

  tryInvokeEventCallback = (type, data) => {
    const callback = this.callbacks[type];
    if (!callback) return false;

    callback(data);
    delete this.callbacks[type];
    return true;
  }
}
