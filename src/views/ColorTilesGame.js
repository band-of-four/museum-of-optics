import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ColorTilesGame.css';
import blueTile from '../img/tiles/blue.png';
import yellowTile from '../img/tiles/yellow.png';
import redTile from '../img/tiles/red.png';
import greenTile from '../img/tiles/green.png';

export default class ColorTilesGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: 'Синяя или красная?',
      answers: 0,
      field: [
        ['g', 'y', 'r', 'g', 'b', 'r'],
        ['r', 'b', 'y', 'r', 'g', 'y'],
        ['y', 'r', 'g', 'b', 'y', 'g'],
        ['r', 'b', 'y', 'r', 'b', 'r'],
        ['b', 'r', 'g', 'y', 'r', 'y'],
        ['r', 'g', 'b', 'r', 'b', 'g']
      ],
      expectedTileColor: '',
      initTask: true,
      currentPosition: [0, 0]
    };
  }

  tileSelected = (color) => () => {
    if (this.state.initTask) {
      return;
    }
    if (this.state.answers === 3) {
      this.setState({ directions: 'Поздравляем, ты прошел игру)' });
      return;
    }

    this.setState({ directions: color, answers: this.state.answers + 1 });
  }

  nextTile = (x, y) => () => {

  }

  initTaskTileSelected = (color) => () => {
    if (color == 'b')
      this.setState({ initTask: false, currentPosition: [5, 2] });
    else
      this.setState({ initTask: false, currentPosition: [5, 3] });
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
