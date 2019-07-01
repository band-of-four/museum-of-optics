import React from 'react';
import { View, Panel, PanelHeader, Button } from '@vkontakte/vkui';
import '../css/CompletedQuest.css';

export default function CompletedQuest({ id, go, genderify, completionDate, resetGame }) {
  if (!completionDate) return null;

  return (
    <View id={id} activePanel="completed-quest-main" header={false}>
      <Panel id="completed-quest-main" theme="white" centered>
        <div className="completed-quest">
          <section>
            <p className="completed-quest__p">
              Поздравляю!
            </p>
            <p className="completed-quest__p">
              Ты {genderify('нашел', 'нашла')} свой ключ, и теперь ты заслуживаешь звание
            </p>
            <p className="completed-quest__large">
              Адепта Ордена Оптики
            </p>
            <p className="completed-quest__p">
              Готовься к следующему бою!
            </p>
          </section>
          <section>
            <p className="completed-quest__p">
              Квест пройден {completionDate.toLocaleDateString('ru-RU')}
            </p>
            {/* <Button onClick={resetGame}>Начать заново</Button> */}
          </section>
        </div>
      </Panel>
    </View >
  );
}
