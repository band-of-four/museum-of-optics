import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ColorTilesGame from './panels/ColorTilesGame';
import QuestMap from './panels/QuestMap';
import MonsterView from './panels/MonsterView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'home',
      activePanelProps: {},
      user: null
    };
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" user={this.state.user} go={this.go} />
        <ColorTilesGame id="color-tiles-game" go={this.go} />
        <QuestMap id="quest-map" go={this.go} />
        <MonsterView id="monster-view" go={this.go} {...this.state.activePanelProps} />
      </View>
    );
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ activePanel: to, activePanelProps: props });
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
