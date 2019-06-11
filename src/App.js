import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Quiz from './panels/Quiz';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'home',
      user: null,
    };
  }

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

  go = (e) => {
    this.setState({ activePanel: e.currentTarget.dataset.to })
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" user={this.state.user} go={this.go} />
        <Quiz id="quiz" go={this.go} />
      </View>
    );
  }
}
