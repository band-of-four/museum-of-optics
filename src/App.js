import React from 'react';
import { Root, Div, Spinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './css/global.css';
import { setupVkIntegration } from './lib/vk';
import { initialSavestate } from './lib/savestate';

import Home from './views/Home';
import Intro from './views/Intro';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import Monster from './views/Monster';
import Forest from './views/Forest';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: null, perViewProps: {}, vk: null, colors: null, savestate: null, onTransition: {} };
  }

  componentDidMount() {
    setupVkIntegration(async (vk) => {
      const storedColors = await vk.storage.get('colors');
      const colors = (storedColors && storedColors != "") ? JSON.parse(storedColors) : null;
      const storedState = colors && await vk.storage.get('savestate');
      const savestate = (storedState && storedState != "") ? JSON.parse(storedState) : initialSavestate;

      const view = colors ? 'quest-map' : 'intro';

      this.setState({ vk, colors, savestate, view });
    });
  }

  render() {
    if (!this.state.vk) {
      return (
        <Div style={{ height: '100%' }}>
          <Spinner size="large" />
        </Div>
      );
    }
    return (
      <Root activeView={this.state.view} onTransition={this.onTransition}>
        {/* Intro & Find Your Colors */}
        <Intro id="intro" gender={this.state.vk.user.gender}
          startQuest={() => this.setState({ view: 'color-tiles-game' })} />
        <ColorTilesGame id="color-tiles-game" onGameComplete={this.saveGameColors} />
        {/* Main quest */}
        <QuestMap id="quest-map" go={this.go} savestate={this.state.savestate}
          attachOnTransition={this.assignQuestMapOnTransition} />
        <Monster id="monster" go={this.go} send={this.state.vk && this.state.vk.send}
          savestate={this.state.savestate} updateSavestate={this.updateSavestate}
          {...this.state.perViewProps.monster} />
        <Forest id="forest" go={this.go} colors={this.state.colors} />
        {/* Development tools (TODO: delet this) */}
        <Home id="home" user={this.state.vk && this.state.vk.user} go={this.go}
          resetSavestate={this.state.vk ? async () => {
            await this.state.vk.storage.set('savestate', '');
            await this.state.vk.storage.set('colors', '');
            this.setState({ savestate: initialSavestate, colors: null, view: 'intro' });
          } : undefined} />
      </Root>
    );
  }

  assignQuestMapOnTransition = (callback) => {
    this.setState({ onTransition: { ...this.state.onTransition, 'quest-map': callback } });
  }

  onTransition = ({ from, to }) => {
    this.state.onTransition[to] && this.state.onTransition[to](from);
  }

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { ...this.state.perViewProps, [to]: props } });
  };

  saveGameColors = async (colors) => {
    await this.state.vk.storage.set('colors', JSON.stringify(colors));
    this.setState({ colors, view: 'quest-map' });
  }

  updateSavestate = async (newSavestate) => {
    await this.state.vk.storage.set('savestate', JSON.stringify(newSavestate));
    this.setState({ savestate: newSavestate });
  }
}
