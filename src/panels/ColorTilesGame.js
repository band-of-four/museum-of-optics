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
      directions: 'Приготовился? Нажми на любой цвет:',
      answers: 0
    };
  }

  tileSelected = (color) => () => {
    if (this.state.answers === 3) {
      this.setState({ directions: 'Поздравляем, ты прошел игру)' });
      return;
    }

    this.setState({ directions: color, answers: this.state.answers + 1 });
  }

  render() {
    return (
      <Panel id={this.props.id} theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
          Какой цвет твой?
        </PanelHeader>
        <Div>
          <div className="tile-directions">{this.state.directions}</div>
          <div className="tile-row">
            <button onClick={this.tileSelected('blue')} className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
            <button onClick={this.tileSelected('red')} className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
          </div>
          <div className="tile-row">
            <button onClick={this.tileSelected('yellow')} className="tile-button" style={{ backgroundImage: `url('${yellowTile}')` }} />
            <button onClick={this.tileSelected('green')} className="tile-button" style={{ backgroundImage: `url('${greenTile}')` }} />
          </div>
          <div className="tile-help">
            Встань лицом к каталогу Аббе
          </div>
        </Div>
      </Panel>
    );
  }
}
