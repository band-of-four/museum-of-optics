import React from 'react';
import { View, Panel, PanelHeader, FixedLayout } from '@vkontakte/vkui';
import ColorRibbon from '../components/ColorRibbon';
import ColorTiles from '../components/ColorTiles';
import ActionLayout from '../components/ActionLayout';
import '../css/ColorTilesGame.css';
import { computeTurn, computeInitTurn } from '../lib/ColorTilesGame.js';

const INIT = 0, INIT_TRANSITION = 1,
  TURN = 2, TURN_TRANSITION = 3,
  RETRY_TRANSITION = 4, RETRY = 5, RETRY_INIT_TRANSITION = 6,
  WIN_TRANSITION = 7, WIN = 8;

const initialDirections = 'Синяя или красная?';
const animationDuration = 800;

export default class ColorTilesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: initialDirections,
      turnstate: null,
      colors: [],
      view: INIT,
    };
  }

  setViewAfterAnimation = (view) =>
    setTimeout(() => this.setState({ view }), animationDuration);

  tileSelected = (color) => () => {
    if (this.state.view === INIT) {
      const [directions, turnstate] = computeInitTurn(color);
      this.setState({ directions, turnstate, colors: [color], view: INIT_TRANSITION });
      this.setViewAfterAnimation(TURN);
      return;
    }
    const newTurnstate = computeTurn(color, this.state.turnstate);
    if (newTurnstate == null) {
      this.setState({ directions: null, colors: [], view: RETRY_TRANSITION });
      this.setViewAfterAnimation(RETRY);
    }
    else if (this.state.colors.length === 3) {
      this.setState({ directions: null, colors: this.state.colors.concat(color), view: WIN_TRANSITION });
      this.setViewAfterAnimation(WIN);
    }
    else {
      const [directions, turnstate] = newTurnstate;
      this.setState({ directions, turnstate, colors: this.state.colors.concat(color), view: TURN_TRANSITION });
      this.setViewAfterAnimation(TURN);
    }
  }

  render() {
    const { view } = this.state;
    const containerClass = view === INIT ? 'tile-container--init'
      : view === INIT_TRANSITION ? 'tile-container--init-transition'
        : view === TURN_TRANSITION ? 'tile-container--turn-transition'
          : (view === RETRY_TRANSITION) ? 'tile-container--fade-out-transition'
            : (view === RETRY || view === WIN) ? 'tile-container--hidden'
              : view === RETRY_INIT_TRANSITION ? 'tile-container--retry-init-transition'
                : view === WIN_TRANSITION ? 'tile-container--win-transition' : '';
    const tilesOnClick = [
      this.tileSelected('b'),
      this.tileSelected('r'),
      view !== INIT ? this.tileSelected('y') : undefined,
      view !== INIT ? this.tileSelected('g') : undefined
    ];
    return (
      <View id={this.props.id} activePanel="color-tiles-main">
        <Panel id="color-tiles-main" theme="white" centered>
          <PanelHeader noShadow>Какие цвета твои?</PanelHeader>
          <FixedLayout vertical="top">
            <ColorRibbon colors={this.state.colors} animated />
            <div className="tile-directions">{this.state.directions || '\u00A0'}</div>
          </FixedLayout>
          <ColorTiles colors={['b', 'r', 'y', 'g']} containerClass={containerClass} onClick={tilesOnClick}>
            {(view === RETRY || view === RETRY_INIT_TRANSITION) && this.renderRetryMessage()}
            {view === WIN && this.renderWinMessage()}
          </ColorTiles>
          {view === INIT && <FixedLayout vertical="bottom">
            <p className="tile-init-tip">
              Дойди до зала с разноцветными плитками на полу и встань в начало, лицом к каталогу Аббе.
              Выбери одну из двух плиток посередине.
            </p>
          </FixedLayout>}
        </Panel>
      </View>
    );
  }

  renderRetryMessage() {
    const animationClass = this.state.view === RETRY_INIT_TRANSITION ? 'message-fade-out' : 'message-fade-in';
    return (
      <div className={animationClass}>
        <ActionLayout primary={['Продолжить', { onClick: this.onClickRetryButton }]}>
          <p className="center">Упс, ошибочка! Вернись в начало и попробуй еще раз ;)</p>
        </ActionLayout>
      </div>
    );
  }

  onClickRetryButton = () => {
    this.setState({ view: RETRY_INIT_TRANSITION });
    setTimeout(() => this.setState({ view: INIT, directions: initialDirections }), animationDuration);
  }

  renderWinMessage() {
    return (
      <div className="message-fade-in">
        <ActionLayout primary={['Вперед, к приключениям!', { onClick: this.onClickWinButton }]}>
          <p className="center">
            Твои цвета помогут тебе в Оптическом Лесу,
            но добраться до него ты {this.props.genderify('должен сам', 'должна сама')}.
          </p>
          <p className="center">
            Чтобы не потеряться, следуй по карте.
          </p>
        </ActionLayout>
      </div>
    );
  }

  onClickWinButton = () => this.props.onCompletion(this.state.colors);
}
