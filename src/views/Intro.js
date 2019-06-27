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
              Добро пожаловать в музей!
            </p>
            <p>
              Полагаю, ты пришел сюда, чтобы освоить чудеса оптической магии? Тогда ты по адресу, Магистры Ордена Оптики самые большие мастера в этой сфере. Но, конечно, никакие знания не даются даром... Чтобы получить доступ к тайнам нашего Ордена тебе предстоит пройти обряд инициации и самому стать его последователем! Ты готов к путешествию в Оптический Лес за званием адепта Ордена Оптики? Если да, то следуй дальнейшим указаниям, и пусть удача сопутствует тебе на этом пути!
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
