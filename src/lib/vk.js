import connect from '@vkontakte/vkui-connect';

const devMode = process.env.NODE_ENV === 'development';

export function setupVkIntegration(integrationCallback) {
  if (devMode) {
    integrationCallback(new Vk(null, 'dev-access-token'));
    return;
  }

  let user = null, accessToken = null;

  function initCallback({ detail: { data, type } }) {
    switch (type) {
      case 'VKWebAppGetUserInfoResult':
        user = data;
        connect.send("VKWebAppGetAuthToken", { app_id: 7017221 });
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
    this.user = user;
    this.accessToken = accessToken;
    this.callbacks = {};
    connect.subscribe(this.handleResponse);
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
