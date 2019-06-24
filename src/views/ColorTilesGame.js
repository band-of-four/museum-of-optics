import React from 'react';
import { View, Panel, PanelHeader, Div, Button } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ColorTilesGame.css';
import blueTile from '../img/tiles/blue.png';
import yellowTile from '../img/tiles/yellow.png';
import redTile from '../img/tiles/red.png';
import greenTile from '../img/tiles/green.png';
import { computeTurn, computeInitTurn } from '../lib/ColorTilesGame.js';

const INIT = 0, INIT_TRANSITION = 1,
  TURN = 2, TURN_TRANSITION = 3,
  RETRY_TRANSITION = 4, RETRY = 5, RETRY_INIT_TRANSITION = 6,
  WIN_TRANSITION = 7, WIN = 8;

const initialDirections = 'Синяя или красная?';
const animationDuration = 800;
const turnsToWin = 3;

export default class ColorTilesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: initialDirections,
      turnstate: null,
      answers: 0,
      view: INIT,
    };
  }

  setViewAfterAnimation = (view) =>
    setTimeout(() => this.setState({ view }), animationDuration);

  tileSelected = (color) => () => {
    if (this.state.view === INIT) {
      const [directions, turnstate] = computeInitTurn(color);
      this.setState({ directions, turnstate, view: INIT_TRANSITION });
      this.setViewAfterAnimation(TURN);
      return;
    }
    const newTurnstate = computeTurn(color, this.state.turnstate);
    if (newTurnstate == null) {
      this.setState({ directions: null, answers: 0, view: RETRY_TRANSITION });
      this.setViewAfterAnimation(RETRY);
    }
    else if (this.state.answers === turnsToWin) {
      this.setState({ directions: null, view: WIN_TRANSITION });
      this.setViewAfterAnimation(WIN);
    }
    else {
      const [directions, turnstate] = newTurnstate;
      this.setState({ directions, turnstate, answers: this.state.answers + 1, view: TURN_TRANSITION });
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
    return (
      <View id={this.props.id} activePanel="color-tiles-main">
        <Panel id="color-tiles-main" theme="white">
          <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
            Какой цвет твой?
          </PanelHeader>
          <Div>
            <div className="tile-directions">{this.state.directions || '\u00A0'}</div>
            <div className="tile-container-wrapper">
              <div className={`tile-container ${containerClass}`}>
                <div>
                  <button onClick={this.tileSelected('b')}
                    className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
                  <button onClick={this.tileSelected('r')}
                    className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
                </div>
                <div>
                  <button onClick={view !== INIT ? this.tileSelected('y') : undefined}
                    className="tile-button" style={{ backgroundImage: `url('${yellowTile}')` }} />
                  <button onClick={view !== INIT ? this.tileSelected('g') : undefined}
                    className="tile-button" style={{ backgroundImage: `url('${greenTile}')` }} />
                </div>
              </div>
              {(view === RETRY || view === RETRY_INIT_TRANSITION) && this.renderRetryMessage()}
              {view === WIN && this.renderWinMessage()}
            </div>
            {(view === INIT || view === INIT_TRANSITION || view === TURN || view === TURN_TRANSITION) && this.renderHelpMessage()}
          </Div>
        </Panel>
      </View>
    );
  }

  renderRetryMessage() {
    const animationClass = this.state.view === RETRY_INIT_TRANSITION ? 'message--fade-out' : 'message--fade-in';
    return (
      <div className={`message ${animationClass}`}>
        <p>Очень жаль, но ты ошибся. Вернись в начало и попробуй еще раз ;)</p>
        <Button size="l" level="1" stretched={true} onClick={() => {
          this.setState({ view: RETRY_INIT_TRANSITION });
          setTimeout(() => this.setState({ view: INIT, directions: initialDirections }), animationDuration);
        }}>Окей</Button>
      </div>
    );
  }

  renderWinMessage() {
    return (
      <div className="message message--fade-in">
        <p>Поздравляем, ты прошел обряд инициации!</p>
        <Button size="l" level="1" stretched={true} onClick={this.props.go} data-to="quest-map">
          Вперед, к приключениям!
        </Button>
      </div>
    );
  }

  renderHelpMessage() {
    return (
      <div className="tile-help">
        Встань лицом к каталогу Аббе
      </div>
    );
  }
}
