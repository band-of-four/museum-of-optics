import React from 'react';
import { Root, Div, Spinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { setupVkIntegration } from './lib/vk';
import { initialSavestate } from './lib/savestate';

import Home from './views/Home';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import Monster from './views/Monster';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'home', perViewProps: {}, vk: null, savestate: null };
  }

  componentDidMount() {
    setupVkIntegration(async (vk) => {
      const storedState = await vk.storage.get('savestate');
      const savestate = (storedState && storedState != "") ? JSON.parse(storedState) : initialSavestate;
      this.setState({ vk, savestate })
    });
  }

  render() {
    if (!this.state.savestate) {
      return (
        <Div style={{ height: '100%' }}>
          <Spinner size="large" />
        </Div>
      );
    }
    return (
      <Root activeView={this.state.view}>
        <Home id="home" user={this.state.vk && this.state.vk.user} go={this.go} />
        <ColorTilesGame id="color-tiles-game" go={this.go} />
        <QuestMap id="quest-map" go={this.go} savestate={this.state.savestate} />
        <Monster id="monster" go={this.go} send={this.state.vk && this.state.vk.send}
          savestate={this.state.savestate} updateSavestate={this.updateSavestate}
          {...this.state.perViewProps.monster} />
      </Root>
    );
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { ...this.state.perViewProps, [to]: props } });
  };

  updateSavestate = async (newSavestate) => {
    await this.state.vk.storage.set('savestate', JSON.stringify(newSavestate));
    this.setState({ savestate: newSavestate });
  }
}