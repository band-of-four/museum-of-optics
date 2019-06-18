import React from 'react';
import { Panel, PanelHeader, FormLayout, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ColorTilesGame.css';
import blueTile from '../img/tile-button-blue.png';
import yellowTile from '../img/tile-button-yellow.png';
import redTile from '../img/tile-button-red.png';
import greenTile from '../img/tile-button-green.png';

export default function ColorTilesGame(props) {
  return (
    <Panel id={props.id} theme="white">
      <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
        Какой твой цвет?
      </PanelHeader>
      <FormLayout>
        <Div>
          <div className="tile-row">
            <button className="tile-button" style={{ backgroundImage: `url('${blueTile}')` }} />
            <button className="tile-button" style={{ backgroundImage: `url('${redTile}')` }} />
          </div>
          <div className="tile-row">
            <button className="tile-button" style={{ backgroundImage: `url('${yellowTile}')` }} />
            <button className="tile-button" style={{ backgroundImage: `url('${greenTile}')` }} />
          </div>
        </Div>
      </FormLayout>
    </Panel>
  );
}
