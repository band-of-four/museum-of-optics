import React from 'react';
import { View, Panel, PanelHeader, FixedLayout, ActionSheet, Tappable } from '@vkontakte/vkui';
import ActionLayout from '../components/ActionLayout';
import ColorTiles from '../components/ColorTiles';
import '../css/Forest.css';

export default class Forest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'forest-intro',
      popout: null,
      letters: ['?', '?', '?', '?'],
      letterTransition: null // an optional index of the letter that's currently being animated
    };
    this.onClickLetterHandlers = [0, 1, 2, 3].map(this.showLetterPopout);
  }

  render() {
    const letterLabels =
      this.state.letters.map((l, i) => {
        const transitionClass = this.state.letterTransition === i ? 'forest-letter-transition' : undefined;
        return <span className={transitionClass}>{l}</span>
      });
    return (
      <View id={this.props.id} activePanel={this.state.view} popout={this.state.popout}>
        <Panel id="forest-intro" theme="white">
          <PanelHeader>Лес</PanelHeader>
          <ActionLayout primary={['Начнем', { onClick: () => this.setState({ view: 'forest-code' }) }]}>
            <p className="center">
              Лес приветствует тебя<br/>Тут проходит финальная часть инициации. Говорят, что разноцветные деревья в этом лесу хранят ключи, необходимые для вступления в Орден Оптики, и что у каждого этот ключ свой. Чтобы завершить обряд собери свой ключ.
            </p>
          </ActionLayout>
        </Panel>
        <Panel id="forest-code" theme="white" centered>
          <PanelHeader>Лес</PanelHeader>
          <FixedLayout vertical="top">
            <p className="center">Собери свой ключ с помощью разноцветных деревьев Леса!</p>
          </FixedLayout>
          <ColorTiles inline buttonClass="forest-button" colors={this.props.colors} labels={letterLabels}
            onClick={this.onClickLetterHandlers} />
        </Panel>
      </View>
    );
  }

  showLetterPopout = (index) => () => {
    const letters = ['α', 'β', 'λ', 'μ'].map((letter, key) => {
      const onClick = () => {
        const letters = this.state.letters.slice();
        letters[index] = letter;
        this.setState({ letters, letterTransition: index });
        // remove the transition class so it reapplies correctly if the popout is requested for the same index
        setTimeout(() => this.setState({ letterTransition: null }), 300);
      }
      return (
        <Tappable key={key} className="forest-popout__letter" onClick={onClick}>{letter}</Tappable>
      );
    });

    this.setState({
      popout: (
        <ActionSheet className="forest-popout-wrapper" onClose={() => this.setState({ popout: null })}>
          <div autoclose className="forest-popout">{letters}</div>
        </ActionSheet>
      )
    });
  }
}
