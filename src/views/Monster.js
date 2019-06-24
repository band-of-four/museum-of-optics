import React from 'react';
import { View, Panel, PanelHeader, Div, Button } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import PanelHeaderClose from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import '../css/Monster.css';
import monsters from '../lib/monsters';
import { updateSavestateOnCompletion } from '../lib/savestate';

export default class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'monster-intro' }
  }

  render() {
    const monster = monsters[this.props.monsterId];
    return (
      <View id={this.props.id} activePanel={this.state.view}>
        {this.renderIntroPanel(monster)}
        {this.renderHintPanel(monster)}
        {this.renderActionPanel(monster)}
        {this.renderResultPanel(monster)}
      </View>
    );
  }

  setView = (view) => () => this.setState({ view });

  renderIntroPanel({ name, sprite, description }) {
    return (
      <Panel id="monster-intro" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="quest-map" />}>
          {name}
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <img className="monster-sprite" alt={name} src={sprite} />
          <p>{description}</p>
          <div className="button-row">
            <Button size="l" level="1" onClick={this.setView('monster-action')}>В бой</Button>
            <Button size="l" level="2" onClick={this.setView('monster-hint')}>Подсказка</Button>
          </div>
        </Div>
      </Panel>
    );
  }

  renderHintPanel({ name, hint }) {
    return (
      <Panel id="monster-hint" theme="white">
        <PanelHeader left={<PanelHeaderClose children="Закрыть" onClick={this.setView('monster-intro')} />}>
          {name}
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>{hint}</Div>
      </Panel>
    );
  }

  renderActionPanel({ name, correctQr }) {
    return (
      <Panel id="monster-action" theme="white">
        <PanelHeader left={<PanelHeaderClose children="Закрыть" onClick={this.setView('monster-intro')} />}>
          {name}
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <div>
            <Button size="l" level="1" onClick={this.applyQrCode(correctQr)}>Применить</Button>
          </div>
        </Div>
      </Panel>
    );
  }

  applyQrCode = (correctQr) => () => {
    this.props.send('VKWebAppOpenQR', {}, {
      VKWebAppOpenQRResult: async ({ qr_data }) => {
        const matchesExpected = qr_data == correctQr;
        if (matchesExpected) {
          const savestate = updateSavestateOnCompletion(this.props.savestate, this.props.monsterId);
          await this.props.updateSavestate(savestate);
        }
        this.setState({ view: 'monster-result', completed: matchesExpected });
      },
      VKWebAppOpenQRFailed: (_) => {
        this.setState({ view: 'monster-result', completed: false });
      }
    });
  }

  renderResultPanel({ name, spriteDefeated, onVictory }) {
    const completed = <>
      <img className="monster-sprite" alt={name} src={spriteDefeated} />
      <p>{onVictory}</p>
      <Button size="l" level="1" onClick={this.props.go} data-to="quest-map">Далее</Button>
    </>;
    const failed = <>
      <p>Очень жаль, но код неправильный :/</p>
      <Button size="l" level="1" onClick={this.setView('monster-action')}>Вернуться</Button>
    </>;
    return (
      <Panel id="monster-result" theme="white">
        <PanelHeader>{name}</PanelHeader>
        <Div style={{ textAlign: "center" }}>
          {this.state.completed ? completed : failed}
        </Div>
      </Panel>
    );
  }
}
