import React from 'react';
import { Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';
import { nodeLocations, computeNodeStates } from '../lib/map';

export default class QuestMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel id={this.props.id} theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
          Карта
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          {this.renderSvgMap()}
        </Div>
      </Panel>
    );
  }

  renderSvgMap() {
    const nodeStates = computeNodeStates(null /* savestate */);
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="510" viewBox="0 0 63.5 134.9">
        {nodeLocations.map(this.renderMapNode(nodeStates))}
      </svg>
    );
  }

  renderMapNode = (nodeStates) => ({ x, y, id }) => {
    switch (nodeStates[id]) {
      case 'completed':
        return <circle cx={x} cy={y} r="6" className="map-node--completed" />;
      case 'locked':
        return <circle cx={x} cy={y} r="6" className="map-node--locked" />
      case 'available':
        return <circle cx={x} cy={y} r="6" className="map-node--available"
          onClick={this.props.go} data-to="monster-view" data-monster-id={id} />;
    }
  }
}
