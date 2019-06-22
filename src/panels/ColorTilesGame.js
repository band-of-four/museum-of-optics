import React from 'react';
import { Panel, PanelHeader, FormLayout, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ColorTilesGame.css';
import blueTile from '../img/tile-button-blue.png';
import yellowTile from '../img/tile-button-yellow.png';
import redTile from '../img/tile-button-red.png';
import greenTile from '../img/tile-button-green.png';

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
      initTask: true
    };
  }

  tileSelected = (color) => () => {
    if (this.state.answers === 3) {
      this.setState({ directions: 'Поздравляем, ты прошел игру)' });
      return;
    }

    this.setState({ directions: color, answers: this.state.answers + 1 });
  }

  nextTile = (x, y) => () => {

  }

  render() {
    if (!this.state.initTask) {
      return (
        <Panel id={this.props.id} theme="white">
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
      );
    }
    else {
      this.state.initTask = false;
      return (
        <Panel id={this.props.id} theme="white">
          <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
            Какой цвет твой?
          </PanelHeader>
          <Div>
            <div className="tile-directions">{this.state.directions}</div>
            <div className="tile-row">
              <button onClick={this.tileSelected('b')} className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
              <button onClick={this.tileSelected('r')} className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
            </div>
          </Div>
        </Panel>
      );
    }
  }
}
