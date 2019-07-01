import React from 'react';
import { Root, Div, Spinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './css/global.css';
import { setupVkIntegration } from './lib/vk';
import { initialSavestate } from './lib/savestate';

// import Home from './views/Home';
import Intro from './views/Intro';
import ColorTilesGame from './views/ColorTilesGame';
import QuestMap from './views/QuestMap';
import QuestMapHelp from './views/QuestMapHelp';
import Monster from './views/Monster';
import Forest from './views/Forest';
import CompletedQuest from './views/CompletedQuest';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null, perViewProps: {}, onTransition: {},
      vk: null, colors: null, savestate: null, completionDate: null
    };
  }

  componentDidMount() {
    setupVkIntegration(async (vk) => {
      const storedColors = await vk.storage.get('colors');
      const colors = (storedColors && storedColors !== "") ? JSON.parse(storedColors) : null;
      const storedState = colors && await vk.storage.get('savestate');
      const savestate = (storedState && storedState !== "") ? JSON.parse(storedState) : initialSavestate;
      const storedCompletion = colors && await vk.storage.get('completion');
      const completionDate = (storedCompletion && storedCompletion !== "") ? new Date(storedCompletion) : null;

      const view = completionDate ? 'completed-quest' : colors ? 'quest-map' : 'intro';

      this.setState({ vk, colors, savestate, view, completionDate });
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
        <Intro id="intro" genderify={this.genderify}
          startQuest={() => this.setState({ view: 'color-tiles-game' })} />
        <ColorTilesGame id="color-tiles-game" onCompletion={this.saveGameColors}
          genderify={this.genderify} />
        {/* Main quest */}
        <QuestMap id="quest-map" go={this.go} savestate={this.state.savestate}
          attachOnTransition={this.assignQuestMapOnTransition} />
        <QuestMapHelp id="quest-map-help" go={this.go} />
        <Monster id="monster" go={this.go} send={this.state.vk && this.state.vk.send}
          savestate={this.state.savestate} updateSavestate={this.updateSavestate}
          {...this.state.perViewProps.monster} />
        <Forest id="forest" go={this.go} colors={this.state.colors} onCompletion={this.finishQuest} />
        <CompletedQuest id="completed-quest" go={this.go}
          completionDate={this.state.completionDate} genderify={this.genderify} />
        {/* Development tools */}
        {/* <Home id="home" user={this.state.vk && this.state.vk.user} go={this.go}
          resetSavestate={this.state.vk ? this.resetSavestate : undefined} /> */}
      </Root>
    );
  }

  genderify = (m, f) => this.state.vk && this.state.vk.user.gender === 'female' ? f : m;

  go = (e) => {
    const { to, ...props } = e.currentTarget.dataset;
    this.setState({ view: to, perViewProps: { ...this.state.perViewProps, [to]: props } });
  };

  assignQuestMapOnTransition = (callback) => {
    this.setState({ onTransition: { ...this.state.onTransition, 'quest-map': callback } });
  }

  onTransition = ({ from, to }) => {
    this.state.onTransition[to] && this.state.onTransition[to](from);
  }

  saveGameColors = async (colors) => {
    await this.state.vk.storage.set('colors', JSON.stringify(colors));
    this.setState({ colors, view: 'quest-map' });
  }

  updateSavestate = async (newSavestate) => {
    await this.state.vk.storage.set('savestate', JSON.stringify(newSavestate));
    this.setState({ savestate: newSavestate });
  }

  finishQuest = async () => {
    const completionDate = new Date();
    await this.state.vk.storage.set('completion', completionDate.toJSON());
    this.setState({ completionDate, view: 'completed-quest' });
  }

  resetSavestate = async () => {
    await this.state.vk.storage.set('savestate', '');
    await this.state.vk.storage.set('colors', '');
    await this.state.vk.storage.set('completion', '');
    this.setState({ savestate: initialSavestate, colors: null, view: 'intro' });
  }
}
