import React from 'react';
import '../css/ColorTiles.css';

// colors: an array of 4 items, each one of 'b', 'r', 'y', 'g'
// onClick: an array of 4 callback functions, one for each of the buttons
// labels: (optional) an array of 4 elements, one for each of the buttons
export default function ColorTiles(props) {
  const wrapperClass = 'ColorTiles__wrapper' + (props.inline ? ' ColorTiles__wrapper--inline' : '');
  const containerClass = (props.containerClass || '') + (props.inline ? ' ColorTiles__container--inline' : '');
  const buttonClass = (props.buttonClass || '') + ' ColorTiles__button' + (props.inline ? ' ColorTiles__button--inline' : '');

  const buttons = props.colors.map((color, i) =>
    <button key={i} onClick={props.onClick[i]} className={`ColorTiles-${color} ${buttonClass}`}>
      <span className="ColorTiles__button__fill" />
      {props.labels && props.labels[i]}
    </button>
  );

  return (
    <div className={wrapperClass}>
      <div className={containerClass}>
        <div>{buttons.slice(0, 2)}</div>
        <div>{buttons.slice(2, 4)}</div>
      </div>
      {props.children}
    </div>
  );
}
