import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';
import { nodeLocations } from '../lib/savestate';

export default function QuestMap({ id, go, savestate }) {
  return (
    <View id={id} activePanel="quest-map-main">
      <Panel id="quest-map-main" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>
          Карта
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="240" height="510" viewBox="0 0 63.5 134.9">
            {nodeLocations.map(renderMapNode(savestate, go))}
          </svg>
        </Div>
      </Panel>
    </View>
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