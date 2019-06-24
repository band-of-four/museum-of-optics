import React from 'react';
import { View, Panel, PanelHeader, Div, Button } from '@vkontakte/vkui';

export default function Intro({ id, startQuest }) {
  return (
    <View id={id} activePanel="intro-main">
      <Panel id="intro-main" theme="white">
        <PanelHeader>Квест</PanelHeader>
        <Div style={{ textAlign: "center" }}>
          <p>
            Добро пожаловать в квест!
          </p>
          <Button size="l" level="1" onClick={startQuest}>Начнем</Button>
        </Div>
      </Panel>
    </View>
  );
}
