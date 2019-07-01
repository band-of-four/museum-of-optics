import React from 'react';
import { View, Panel, PanelHeader } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/CompletedQuest.css';

export default function CompletedQuest({ id, go, genderify, completionDate }) {
  if (!completionDate) return null;

  return (
    <View id={id} activePanel="completed-quest-main">
      <Panel id="completed-quest-main" theme="white" centered>
        <PanelHeader>Секреты Ордена Оптики</PanelHeader>
        <div className="completed-quest">
          <section>
            <p>Поздравляю!</p>
            <p>
              Ты {genderify('нашел', 'нашла')} свой ключ, и теперь ты заслуживаешь звания Магистра Ордена Оптики!
            </p>
          </section>
          <section>
            <p>
              Квест пройден {completionDate.toLocaleDateString('ru-RU')}
            </p>
          </section>
        </div>
      </Panel>
    </View >
  );
}
