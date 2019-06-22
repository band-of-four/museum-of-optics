import React from 'react';
import { Panel, PanelHeader, Div, Button } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

export default class MonsterView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel id={this.props.id} theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={this.props.go} data-to="home" />}>
          Beast 14
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <img alt="" src="" />
          <p>лор</p>
          <div>
            <Button size="l" level="1">В бой</Button>
            <Button size="l" level="2">Подсказка</Button>
          </div>
        </Div>
      </Panel>
    );
  }
}
