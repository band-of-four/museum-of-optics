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
      expectedPosition: [0, 0],
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
    this.setState({ currentPosition: this.state.expectedPosition });
    this.nextTile();

    this.setState({ answers: this.state.answers + 1 });
  }

  nextTile = () => () => {
    var direction = Math.floor(Math.random() * 4); // random int [0; 3]
    // 0 - left, 1 - up, 2 - right, 3 - down
    while ((direction == 0 && this.state.currentPosition[0] == 0) ||
      (direction == 1 && this.state.currentPosition[1] == 0) ||
      (direction == 2 && this.state.currentPosition[0] == 5) ||
      (direction == 3 && this.state.currentPosition[1] == 5))
      direction = Math.floor(Math.random() * 4);
    var stringDirection = '', offset = 0, currentPosition = this.state.currentPosition;
    switch (direction) {
      case 0:
        stringDirection = 'left';
        offset = 1 + Math.floor(Math.random * (currentPosition[1]));
        this.setState({ expectedPosition: [currentPosition[0], currentPosition[1] - offset] });
        break;
      case 1:
        stringDirection = 'up';
        offset = 1 + Math.floor(Math.random * (currentPosition[0]));
        this.setState({ expectedPosition: [currentPosition[0] - offset, currentPosition[1]] });
        break;
      case 2:
        stringDirection = 'right';
        offset = 1 + Math.floor(Math.random * (5 - currentPosition[1]));
        this.setState({ expectedPosition: [currentPosition[0], currentPosition[1] + offset] });
        break;
      case 3:
        stringDirection = 'down';
        offset = 1 + Math.floor(Math.random * (5 - currentPosition[0]));
        this.setState({ expectedPosition: [currentPosition[0] + offset, currentPosition[1]] });
    }
    this.setState({ directions: `${stringDirection}, ${offset}` });
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
