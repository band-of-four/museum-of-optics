import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

export default function Forest({ id, go }) {
  return (
    <View id={id} activePanel="forest-main">
      <Panel id="forest-main" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="quest-map" />}>
          Лес
        </PanelHeader>
        <Div style={{ textAlign: "center" }}>
          Лес приветствует тебя
        </Div>
      </Panel>
    </View>
  );
}
