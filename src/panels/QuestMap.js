import React from 'react';
import { Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/QuestMap.css';

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
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="510" viewBox="0 0 63.5 134.9">
        <g stroke="#5b6e85" stroke-linejoin="bevel">
          <path onClick={this.props.go} data-to="monster-view" className="map-point map-point--active" d="m 97.802765,280.49843 a 5.7568679,5.7568679 0 0 1 -5.756852,5.75687 5.7568679,5.7568679 0 0 1 -5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756852,5.75687 z" transform="translate(-62.5 -151.8)" />
          <path className="map-point" d="m 125.11302,245.42807 a 5.7568679,5.7568679 0 0 1 -5.75687,5.75687 5.7568679,5.7568679 0 0 1 -5.75687,-5.75687 5.7568679,5.7568679 0 0 1 5.75687,-5.75687 5.7568679,5.7568679 0 0 1 5.75687,5.75687 z" transform="translate(-62.5 -151.8)" />
          <path className="map-point" d="m 74.549982,227.91759 a 5.7568679,5.7568679 0 0 1 -5.756868,5.75687 5.7568679,5.7568679 0 0 1 -5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756868,5.75687 z" transform="translate(-62.5 -151.8)" />
          <path className="map-point" d="m 80.927102,187.4501 a 5.7568679,5.7568679 0 0 1 -5.756868,5.75687 5.7568679,5.7568679 0 0 1 -5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756868,-5.75687 5.7568679,5.7568679 0 0 1 5.756868,5.75687 z" transform="translate(-62.5 -151.8)" />
          <path className="map-point" d="m 119.94733,204.56073 a 5.7568679,5.7568679 0 0 1 -5.75687,5.75687 5.7568679,5.7568679 0 0 1 -5.75687,-5.75687 5.7568679,5.7568679 0 0 1 5.75687,-5.75687 5.7568679,5.7568679 0 0 1 5.75687,5.75687 z" transform="translate(-62.5 -151.8)" />
          <path className="map-point" d="m 103.43626,159.10691 a 5.7568679,5.7568679 0 0 1 -5.756871,5.75686 5.7568679,5.7568679 0 0 1 -5.75686,-5.75686 5.7568679,5.7568679 0 0 1 5.75686,-5.75687 5.7568679,5.7568679 0 0 1 5.756871,5.75687 z" transform="translate(-62.5 -151.8)" />
        </g>
      </svg>
    );
  }
}
