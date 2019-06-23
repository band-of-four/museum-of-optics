import React from 'react';
import { Root } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Vk, setupVkIntegration } from './lib/vk';

import Home from './views/Home';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import Monster from './views/Monster';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'home', perViewProps: {}, vk: null };
  }

  render() {
    return (
      <Root activeView={this.state.view}>
        <Home id="home" user={this.state.vk && this.state.vk.user} go={this.go} />
        <ColorTilesGame id="color-tiles-game" go={this.go} />
        <QuestMap id="quest-map" go={this.go} />
        <Monster id="monster" go={this.go} send={this.state.vk && this.state.vk.send}
          {...this.state.perViewProps.monster} />
      </Root>
    );
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { ...this.state.perViewProps, [to]: props } });
  };

  componentDidMount() {
    setupVkIntegration((vk) => this.setState({ vk }));
  }
}
