import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';
import { nodeLocations, isForestUnlocked } from '../lib/savestate';

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
            {/* paths */}
            <path className="map-path" strokeDasharray="4.8000001, 4.8000001" strokeDashoffset="7.6" d="M30.4 252.5c-2.8-4.4-17.8-23.6-21.5-40.7" />
            <path className="map-path" strokeDasharray="4.80000033, 4.80000033" strokeDashoffset="7.6" d="M39.1 252.3l16-20.7" />
            <path className="map-path" strokeDasharray="4.80000015, 4.80000015" strokeDashoffset="7.6" d="M6.1 199.1c-.7-4.8-1-20-.6-26.2" />
            <path className="map-path" strokeDasharray="4.80000033, 4.80000033" strokeDashoffset=".7" d="M60.2 217.3s.8-26.5-.7-34" />
            <path className="map-path" strokeDasharray="4.80000033, 4.80000033" strokeDashoffset="9.4" d="M9.7 158.5c10-10.8 23.7-20.2 23.7-20.2" />
            <path className="map-path" strokeDasharray="4.80000038, 4.80000038" strokeDashoffset=".7" d="M57.5 168.5S50 150 43.7 140.8" />
            <path className="map-path" strokeDasharray="4.80000028, 4.80000028" strokeDashoffset="8" d="M36.5 127.5s-10.2-10.1-11.3-13.7" />
            <path className="map-path" strokeDasharray="4.80000028, 4.80000028" strokeDashoffset="8.3" d="M41.7 127.4s12.4-18 13.4-24.1" />
            <path className="map-path" strokeDasharray="4.80000028, 4.80000028" strokeDashoffset="7.8" d="M18.2 102.7c-3-4.4-5.8-11-7-16.2" />
            <path className="map-path" strokeDasharray="4.80000028, 4.80000028" strokeDashoffset="8.6" d="M58 90.7s2.8-14.4.1-26" />
            <path className="map-path" strokeDasharray="4.91087901, 4.91087901" strokeDashoffset="8" d="M8 72.6s-1.6-8.5.2-17.8" />
            <path className="map-path" strokeDasharray="4.91200037, 4.91200037" strokeDashoffset="9.3" d="M11.4 40.3S22 25.2 27.5 19.9" />
            <path className="map-path" strokeDasharray="4.80000033, 4.80000033" strokeDashoffset="8.6" d="M55.8 51.2s-4.8-18.3-15-31.6" />
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
  const forestUnlocked = isForestUnlocked(savestate);
  const pathClass = forestUnlocked ? 'map-node--available' : 'map-node--locked';
  return <g className={pathClass}>
    <circle cx="34" cy="10.5" r="10" />
    <path strokeLinejoin="round" d="M30.5 8.8h2.1l-3.3 3.7H33v3.6h2.2v-3.6h3.5l-3.3-3.8h2.1L34 4.1z" />
  </g>;
};
