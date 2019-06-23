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
      expectedPosition: [-1, -1],
      initTask: true,
      currentPosition: [-1, -1],
      routes: ['left', 'up', 'right', 'down']
    };
  }

  tileSelected = (color) => () => {
    if (this.state.initTask) {
      return;
    }
    if (color != this.state.field[this.state.expectedPosition[0]]
      [this.state.expectedPosition[1]]) {
      this.setState({ initTask: true, answers: 0, directions: 'Неверно, попробуем ещё раз' });
      return;
    }
    if (this.state.answers === 3) {
      this.setState({ directions: 'Поздравляем, ты прошел игру)' });
      return;
    }
    this.setState({ currentPosition: this.state.expectedPosition });
    this.nextTile(this.state.expectedPosition[0], this.state.expectedPosition[1]);

    this.setState({ answers: this.state.answers + 1 });
  }

  nextTile = (x, y) => {
    var direction = Math.floor(Math.random() * 4); // random int [0; 3]
    var stateRoutes = this.state.routes;
    // 0 - left, 1 - up, 2 - right, 3 - down
    while (
      (stateRoutes[direction] == 'left' && y == 0) ||
      (stateRoutes[direction] == 'up' && x == 0) ||
      (stateRoutes[direction] == 'right' && y == 5) ||
      (stateRoutes[direction] == 'down' && x == 5)
    )
      direction = Math.floor(Math.random() * 4);
    var offset = 0, relRoutes = this.state.routes;
    if (this.state.initTask)
      relRoutes = ['left', 'up', 'right', 'down'];
    switch (direction) {
      case 0:
        relRoutes = relRoutes.slice(3).concat(relRoutes.slice(0,3));
        offset = 1 + Math.floor(Math.random() * y);
        this.setState({ expectedPosition: [x, y - offset] });
        break;
      case 1:
        offset = 1 + Math.floor(Math.random() * x);
        this.setState({ expectedPosition: [x - offset, y] });
        break;
      case 2:
        relRoutes = relRoutes.slice(1).concat(relRoutes[0]);
        offset = 1 + Math.floor(Math.random() * (5 - y));
        this.setState({ expectedPosition: [x, y + offset] });
        break;
      case 3:
        relRoutes = relRoutes.slice(2).concat(relRoutes.slice(0,2));
        offset = 1 + Math.floor(Math.random() * (5 - x));
        this.setState({ expectedPosition: [x + offset, y] });
        break;
    }
    this.setState({ directions: `${this.state.routes[direction]}, ${offset}`, routes: relRoutes });
  }

  initTaskTileSelected = (color) => () => {
    var x = 5, y;
    if (color == 'b')
      y = 2;
    else
      y = 3;
    this.setState({ initTask: false, currentPosition: [x, y] });
    this.nextTile(x, y);
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
