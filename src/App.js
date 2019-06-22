import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './views/Home';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import Monster from './views/Monster';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      perViewProps: {},
      user: null,
      connectCallbacks: {}
    };
  }

  render() {
    return (
      <Root activeView={this.state.view}>
        <Home id="home" user={this.state.user} go={this.go} />
        <ColorTilesGame id="color-tiles-game" go={this.go} />
        <QuestMap id="quest-map" go={this.go} />
        <Monster id="monster" go={this.go} send={this.sendConnectRequest}
          {...this.state.perViewProps['monster']} />
      </Root>
    );
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { ...this.state.perViewProps, [to]: props } });
  };

  /* callbacks is an object of { event type (string): callback function } */
  sendConnectRequest = (method, args, callbacks) => {
    this.setState({ connectCallbacks: callbacks });
    connect.send(method, args);
  }

  tryInvokeEventCallback = (type, data) => {
    const callback = this.state.connectCallbacks[type];
    if (!callback) return false;

    callback(data);
    this.setState({ connectCallbacks: { ...this.state.connectCallbacks, [type]: undefined } });
    return true;
  }

  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({ user: e.detail.data });
          break;
        default:
          if (!this.tryInvokeEventCallback(e.detail.type, e.detail.data)) {
            if (e.detail.handler === 'VKWebAppOpenQR' &&
              this.tryInvokeEventCallback('VKWebAppOpenQRResult', { qr_data: 'test' })) {
              /* FIXME: remove later, this is a development hack to mock the API method */
            }
            else {
              console.log(`Unhandled connect event: ${e.detail.type}`);
            }
          }
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
  }
}
