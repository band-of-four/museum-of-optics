import React from 'react';
import { View, Panel, PanelHeader, Div } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

export default function Forest({ id, go }) {
  return (
    <View id={id} activePanel="forest-intro">
      <Panel id="forest-intro" theme="white">
        <PanelHeader>Лес</PanelHeader>
        <Div style={{ textAlign: "center" }}>
          Лес приветствует тебя
        </Div>
      </Panel>
    </View>
  );
}
