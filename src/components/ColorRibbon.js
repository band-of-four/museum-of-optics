import React from 'react';
import '../css/ColorRibbon.css';

export default function ColorRibbon(props) {
  const itemClass = props.animated ? 'color-ribbon__item color-ribbon__item--animated' : 'color-ribbon__item';
  return (
    <div className="color-ribbon">
      {props.colors.map((c) =>
        <div className={`${itemClass} color-ribbon__item--${c}`}></div>)}
    </div>
  );
}
