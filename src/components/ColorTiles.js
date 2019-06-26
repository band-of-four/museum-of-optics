import React from 'react';
import '../css/ColorTiles.css';
import blueTile from '../img/tiles/blue.png';
import yellowTile from '../img/tiles/yellow.png';
import redTile from '../img/tiles/red.png';
import greenTile from '../img/tiles/green.png';

// onClick: an object of { (b, r, y, g): onClick handler }
export default function ColorTiles(props) {
  return (
    <div className="ColorTiles__wrapper">
      <div className={props.containerClass}>
        <div>
          <button onClick={props.onClick.b} className="ColorTiles__button" style={{ backgroundImage: `url('${blueTile}')` }} />
          <button onClick={props.onClick.r} className="ColorTiles__button" style={{ backgroundImage: `url('${redTile}')` }} />
        </div>
        <div>
          <button onClick={props.onClick.y} className="ColorTiles__button" style={{ backgroundImage: `url('${yellowTile}')` }} />
          <button onClick={props.onClick.g} className="ColorTiles__button" style={{ backgroundImage: `url('${greenTile}')` }} />
        </div>
      </div>
      {props.children}
    </div>
  );
}
