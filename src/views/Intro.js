import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import ActionLayout from '../components/ActionLayout';

export default function Intro({ id, startQuest, genderify }) {
  return (
    <View id={id} activePanel="intro-main">
      <Panel id="intro-main" theme="white">
        <PanelHeader>Секреты Ордена Оптики</PanelHeader>
        <ActionLayout primary={['Начнем', { onClick: startQuest }]}>
          <p>
            Добро пожаловать в музей!
          </p>
          <p>
            Полагаю, ты {genderify('пришел', 'пришла')} сюда, чтобы освоить чудеса оптической магии?
            Тогда ты по адресу, ведь Магистры Ордена Оптики — самые большие мастера в этой сфере.
            Разумеется, никакие знания не даются даром...
          </p>
          <p>
            Чтобы получить доступ к тайнам нашего Ордена, тебе предстоит пройти обряд инициации и {genderify('самому', 'самой')} стать его последователем!
            Ты {genderify('готов', 'готова')} к путешествию в Оптический Лес за званием адепта Ордена Оптики?
            Следуй дальнейшим указаниям, и пусть удача сопутствует тебе на этом пути!
          </p>
        </ActionLayout>
      </Panel>
    </View>
  );
}
