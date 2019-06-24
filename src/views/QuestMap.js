import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';
import { nodeLocations, computePaths, isForestUnlocked } from '../lib/savestate';

export default function QuestMap({ id, go, savestate }) {
  return (
    <View id={id} activePanel="quest-map-main">
      <Panel id="quest-map-main" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>
          Карта
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 264">
            {nodeLocations.map(renderMapNode(savestate, go))}
            {renderForest(savestate)}
            {renderPaths(savestate)}
          </svg>
        </Div>
      </Panel>
    </View>
  );
}

const renderMapNode = (savestate, go) => ({ x, y, id }) => {
  switch (savestate[id]) {
    case 'completed':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--completed" />;
    case 'locked':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--locked" />
    case 'available':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--available"
        onClick={go} data-to="monster" data-monster-id={id} />;
  }
};

const renderForest = (savestate) => {
  const pathClass = isForestUnlocked(savestate) ? 'map-node--available' : 'map-node--locked';
  return <g className={pathClass}>
    <circle cx="34" cy="10.5" r="10" />
    <path strokeLinejoin="round" d="M30.5 8.8h2.1l-3.3 3.7H33v3.6h2.2v-3.6h3.5l-3.3-3.8h2.1L34 4.1z" />
  </g>;
};

const renderPaths = (savestate) =>
  computePaths(savestate).map(({ state, ...svg }) => (
    <path className={`map-path map-path--${state}`} {...svg} />
  ));
