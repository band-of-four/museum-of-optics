import React, { useEffect, useRef } from 'react';
import { View, Panel, PanelHeader, HeaderButton } from '@vkontakte/vkui';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import '../css/QuestMap.css';
import { nodeLocations, computePaths, isSavestateEmpty, isForestUnlocked } from '../lib/savestate';

export default function QuestMap({ id, go, savestate, attachOnTransition }) {
  const mapBottomRef = useRef(null);
  useEffect(() => {
    attachOnTransition((from) => {
      isSavestateEmpty(savestate) && mapBottomRef.current &&
        requestAnimationFrame(() => mapBottomRef.current.scrollIntoView({ behavior: 'smooth' }));
    })
  }, []);

  const helpButton = <HeaderButton onClick={go} data-to="quest-map-help">
    <Icon28HelpOutline />
  </HeaderButton>;

  return (
    <View id={id} activePanel="quest-map-main">
      <Panel id="quest-map-main" theme="white">
        <PanelHeader left={helpButton}>Секреты Ордена Оптики</PanelHeader>
        <div className="map-container">
          <svg className="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 264">
            {nodeLocations.map(renderMapNode(savestate, go))}
            {renderForest(savestate, go)}
            {renderPaths(savestate)}
          </svg>
          {<div ref={mapBottomRef} />}
        </div>
      </Panel>
    </View>
  );
}

const renderMapNode = (savestate, go) => ({ x, y, id }) => {
  const state = savestate[id];
  const props = (state !== 'locked' && id !== 0)
    ? { onClick: go, 'data-to': 'monster', 'data-monster-id': id }
    : {};
  return <circle key={id} cx={x} cy={y} r="6" className={`map-node--${state}`} {...props} />;
};

const renderForest = (savestate, go) => {
  const forestUnlocked = isForestUnlocked(savestate);
  return (
    <g className={forestUnlocked ? 'map-node--available' : 'map-node--locked'}
      onClick={forestUnlocked ? go : undefined} data-to="forest">
      <circle cx="34" cy="10.5" r="10" />
      <path strokeLinejoin="round" d="M30.5 8.8h2.1l-3.3 3.7H33v3.6h2.2v-3.6h3.5l-3.3-3.8h2.1L34 4.1z" />
    </g>
  );
};

const renderPaths = (savestate) =>
  computePaths(savestate).map(({ state, ...svg }, i) => (
    <path key={i} className={`map-path map-path--${state}`} {...svg} />
  ));
