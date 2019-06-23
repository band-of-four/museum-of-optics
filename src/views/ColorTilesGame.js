import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ColorTilesGame.css';
import blueTile from '../img/tiles/blue.png';
import yellowTile from '../img/tiles/yellow.png';
import redTile from '../img/tiles/red.png';
import greenTile from '../img/tiles/green.png';
import { computeTurn, computeInitTask } from '../lib/ColorTilesGame.js';

export default class ColorTilesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: 'Синяя или красная?',
      answers: 0,
      x: -1,
      y: -1,
      initTask: true,
      routes: ['left', 'up', 'right', 'down']
    };
  }

  tileSelected = (color) => () => {
    var newState = computeTurn(color,
      this.state.x,
      this.state.y,
      this.state.answers,
      this.state.routes);
    if (newState.answers == 3)
      newState.directions = 'Поздравляем, ты прошел игру!';
    this.setState(newState);
  }
  initTaskTileSelected = (color) => () => {
    var newState = computeInitTask(color);
    this.setState(newState);
  }

  render() {
    return (
      <View id={this.props.id} activePanel={this.state.initTask ? 'color-tiles-init-task' : 'color-tiles-main'}>
        <Panel id="color-tiles-init-task" theme="white">
          <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
            Какой цвет твой?
          </PanelHeader>
          <Div>
            <div className="tile-directions">{this.state.directions}</div>
            <div className="tile-row">
              <button onClick={this.initTaskTileSelected('b')} className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
              <button onClick={this.initTaskTileSelected('r')} className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
            </div>
          </Div>
        </Panel>
        <Panel id="color-tiles-main" theme="white">
          <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
            Какой цвет твой?
          </PanelHeader>
          <Div>
            <div className="tile-directions">{this.state.directions}</div>
            <div className="tile-row">
              <button onClick={this.tileSelected('b')} className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
              <button onClick={this.tileSelected('r')} className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
            </div>
            <div className="tile-row">
              <button onClick={this.tileSelected('y')} className="tile-button" style={{ backgroundImage: `url('${yellowTile}')` }} />
              <button onClick={this.tileSelected('g')} className="tile-button" style={{ backgroundImage: `url('${greenTile}')` }} />
            </div>
            <div className="tile-help">
              Встань лицом к каталогу Аббе
            </div>
          </Div>
        </Panel>
      </View>
    );
  }
}
