import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import ChallengeList from './panels/ChallengeList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: 'home',
      user: null
    };
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" user={this.state.user} go={this.go} />
        <ChallengeList id="challenge-list" go={this.go} />
      </View>
    );
  }

  go = (e) => {
    this.setState({ activePanel: e.currentTarget.dataset.to })
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
