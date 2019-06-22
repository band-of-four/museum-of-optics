import React from 'react';
import seIfmoRu from '../img/monsters/se_ifmo_ru.png';

const monsters = {
  2: {
    name: 'Утиная типизация',
    sprite: seIfmoRu,
    description: 'И сколько в твоем интерпретаторе сегфолтов?',
    correctQr: 'test',
    hints: (
      <p>
        Добрый день, я Утинатор, и сегодня я хочу рассказать вам о том,
        почему вы должны бросить все дела и заставить себя учить Форт.
      </p>
    )
  }
};

export default monsters;
