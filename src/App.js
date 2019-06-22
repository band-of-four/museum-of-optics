import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './views/Home';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import MonsterView from './views/MonsterView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home',
      perViewProps: {},
      user: null
    };
  }

  render() {
    return (
      <Root activeView={this.state.view}>
        <Home id="home" user={this.state.user} go={this.go} />
        <ColorTilesGame id="color-tiles-game" go={this.go} />
        <QuestMap id="quest-map" go={this.go} />
        <MonsterView id="monster-view" go={this.go} {...this.state.perViewProps['monster-view']} />
      </Root>
    );
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { [to]: props, ...this.state.perViewProps } });
  };

  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({ user: e.detail.data });
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
  }
}
