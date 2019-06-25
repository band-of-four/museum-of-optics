import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import ActionLayout from '../components/ActionLayout';

export default function Intro({ id, startQuest }) {
  return (
    <View id={id} activePanel="intro-main">
      <Panel id="intro-main" theme="white">
        <PanelHeader>Квест</PanelHeader>
        <ActionLayout primary={['Начнем', { onClick: startQuest }]}>
          <div className="center">
            <p>
              Добро пожаловать в квест!
            </p>
            <p>
              ... ... ...
            </p>
            <p>
              Дойди до зала с разноцветными плитками на полу и встань лицом к каталогу Аббе
            </p>
          </div>
        </ActionLayout>
      </Panel>
    </View>
  );
}
