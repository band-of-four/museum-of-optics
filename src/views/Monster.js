import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import PanelHeaderClose from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import ActionLayout from '../components/ActionLayout';
import qrCodeExample from '../img/qr-code-example.svg';
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
        <ActionLayout
          primary={['В бой', { onClick: this.setView('monster-action') }]}
          secondary={['Подсказка', { onClick: this.setView('monster-hint') }]}>
          <img className="block-image" alt={name} src={sprite} />
          <p>{description}</p>
        </ActionLayout>
      </Panel>
    );
  }

  renderHintPanel({ name, hint }) {
    return (
      <Panel id="monster-hint" theme="white">
        <PanelHeader>{name}</PanelHeader>
        <ActionLayout primary={['Закрыть', { onClick: this.setView('monster-intro') }]}>
          {hint}
        </ActionLayout>
      </Panel>
    );
  }

  renderActionPanel({ name, correctQr }) {
    return (
      <Panel id="monster-action" theme="white">
        <PanelHeader left={<PanelHeaderClose children="Назад" onClick={this.setView('monster-intro')} />}>
          {name}
        </PanelHeader>
        <ActionLayout primary={['Применить', { onClick: this.applyQrCode(correctQr) }]}>
          <div className="center">
            <p>
              Найди в музее нужный артефакт, рядом с котором есть код:
            </p>
            <img alt="Пример QR-кода" src={qrCodeExample} style={{ maxWidth: '200px' }} />
            <p>
              Нажми "Применить" и наведи на код камеру своего телефона.
            </p>
            <p className="secondary-text">
              Помни, что один артефакт можно использовать только один раз.
            </p>
          </div>
        </ActionLayout>
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
    const completed = (
      <ActionLayout primary={['Продолжить', { onClick: this.props.go, 'data-to': 'quest-map' }]}>
        <img className="block-image" alt={name} src={spriteDefeated} />
        <p>{onVictory}</p>
      </ActionLayout>
    );
    const failed = (
      <ActionLayout primary={['Вернуться', { onClick: this.setView('monster-action') }]}>
        <p>К сожалению, этот артефакт никак не подействовал на монстра. Подумай еще ;)</p>
      </ActionLayout>
    );
    return (
      <Panel id="monster-result" theme="white">
        <PanelHeader>{name}</PanelHeader>
        {this.state.completed ? completed : failed}
      </Panel>
    );
  }
}
