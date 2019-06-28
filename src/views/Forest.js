import React from 'react';
import { View, Panel, PanelHeader, ActionSheet, Tappable, FixedLayout } from '@vkontakte/vkui';
import ActionLayout from '../components/ActionLayout';
import ColorTiles from '../components/ColorTiles';
import '../css/Forest.css';
import { forestLetters, verifyForestCode } from '../lib/forest';

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
          <PanelHeader>Лес приветствует тебя</PanelHeader>
          <ActionLayout primary={['Начнем', { onClick: () => this.setState({ view: 'forest-code' }) }]}>
            <p>
              Добро пожаловать на финальную часть инициации!
            </p>
            <p>
              Для вступления в Орден Оптики тебе нужен свой, личный ключ, которого нет ни у кого.
            </p>
            <p>
              Найти его ты сможешь в лесу, среди разноцветных деревьев.
            </p>
          </ActionLayout>
        </Panel>
        <Panel id="forest-code" theme="white" centered>
          <PanelHeader>Лес</PanelHeader>
          <FixedLayout className="forest-top-message" vertical="top">
            <p className="forest-top-message__p">Собери свой ключ с помощью разноцветных деревьев Леса!</p>
          </FixedLayout>
          <ColorTiles inline buttonClass="forest-button" colors={this.props.colors} labels={letterLabels}
            onClick={this.onClickLetterHandlers} />
          <FixedLayout className="forest-top-message" vertical="bottom">
            <p className="forest-top-message__p">Внимательно посмотри на деревья... Возможно, они что-то скрывают?</p>
          </FixedLayout>
        </Panel>
      </View>
    );
  }

  showLetterPopout = (index) => () => {
    const letters = forestLetters.map((letter, key) => {
      const onClick = () => {
        const letters = this.state.letters.slice();
        letters[index] = letter;
        this.setState({ letters, letterTransition: index });
        setTimeout(() => {
          if (verifyForestCode(this.props.colors, this.state.letters)) {
            this.props.onCompletion();
          }
          else {
            /* Remove the transition clas to ensure the animation is correctly replayed
             * when the popout is requested for the same index */
            this.setState({ letterTransition: null });
          }
        }, /* wait for the letter animation to complete before altering the view */ 300);
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
