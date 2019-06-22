import React from 'react';
import { View, Panel, PanelHeader, Div, Button } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import PanelHeaderClose from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import monsters from '../lib/monsters';

export default class MonsterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'monster-view-intro' }
  }

  render() {
    const monster = monsters[this.props.monsterId];
    return (
      <View id={this.props.id} activePanel={this.state.view}>
        {this.renderIntroPanel(monster)}
        {this.renderActionPanel(monster)}
      </View>
    );
  }

  renderIntroPanel({ name, sprite, description }) {
    return (
      <Panel id="monster-view-intro" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="quest-map" />}>
          {name}
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <img alt={name} src={sprite} />
          <p>{description}</p>
          <div>
            <Button size="l" level="1" onClick={() => this.setState({ view: 'monster-view-action' })}>В бой</Button>
            <Button size="l" level="2">Подсказка</Button>
          </div>
        </Div>
      </Panel>
    );
  }

  renderActionPanel({ name }) {
    return (
      <Panel id="monster-view-action" theme="white">
        <PanelHeader left={<PanelHeaderClose children="Закрыть" onClick={() => this.setState({ view: 'monster-view-intro' })} />}>
          {name}
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <div>
            <Button size="l" level="1" onClick={() => this.setState({ view: 'action' })}>Применить</Button>
          </div>
        </Div>
      </Panel>
    );
  }
}