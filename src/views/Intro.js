import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import ActionLayout from '../components/ActionLayout';

export default function Intro({ id, startQuest, genderify, playerName }) {
  return (
    <View id={id} activePanel="intro-main">
      <Panel id="intro-main" theme="white">
        <PanelHeader>Секреты Ордена Оптики</PanelHeader>
        <ActionLayout primary={['Начнем', { onClick: startQuest }]}>
          <p>
            Добро пожаловать в Резиденцию!
          </p>
          <p>
            Мы ждали тебя, {playerName}. 
            Полагаю, ты {genderify('пришел', 'пришла')} сюда, чтобы освоить чудеса оптической магии?
            Тогда ты по адресу, ведь Магистры Ордена Оптики — самые большие мастера в этой сфере.
          </p>
          <p>
            Чтобы получить доступ к тайнам, тебе предстоит пройти обряд инициации и стать последователем Ордена.
            Ты {genderify('готов', 'готова')} открыть глаза и увидеть другой мир? Тогда вперед за званием адепта Ордена Оптики.
            Следуй дальнейшим указаниям, и пусть удача сопутствует тебе на этом пути!
          </p>
        </ActionLayout>
      </Panel>
    </View>
  );
}
