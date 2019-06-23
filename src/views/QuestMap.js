import React from 'react';
import { View, Panel, PanelHeader, Div, Spinner } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';
import { nodeLocations, computeNodeStates } from '../lib/map';

export default function QuestMap({ id, go, savestate }) {
  return (
    <View id={id} activePanel="quest-map-main">
      <Panel id="quest-map-main" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>
          Карта
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          {savestate ? renderSvgMap(savestate, go) : <Spinner size="large"/>}
        </Div>
      </Panel>
    </View>
  );
}

function renderSvgMap(savestate, go) {
  const nodeStates = computeNodeStates(savestate);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="510" viewBox="0 0 63.5 134.9">
      {nodeLocations.map(renderMapNode(nodeStates, go))}
    </svg>
  );
}

const renderMapNode = (nodeStates, go) => ({ x, y, id }) => {
  switch (nodeStates[id]) {
    case 'completed':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--completed" />;
    case 'locked':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--locked" />
    case 'available':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--available"
        onClick={go} data-to="monster" data-monster-id={id} />;
  }
}
