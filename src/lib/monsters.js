import React from 'react';
import seIfmoRu from '../img/monsters/se_ifmo_ru.png';

const monsters = {
  3: {
      name: 'Лекция Калинина',
      sprite: seIfmoRu,
      spriteDefeated: seIfmoRu,
      description: 'Посчитайте вероятность того, что Калинин придет на лекцию?',
      correctQr: 'test',
      hint: (
        <p>
          Добрый день, я Игорь Владимирович, и сегодня мы будем заниматься теорвером.
        </p>
			)
		},
  2: {
    name: 'Утиная типизация',
    sprite: seIfmoRu,
    spriteDefeated: seIfmoRu,
    description: 'И сколько в твоем интерпретаторе сегфолтов?',
    correctQr: 'test',
    hint: (
      <p>
        Добрый день, я Утинатор, и сегодня я хочу рассказать вам о том,
        почему вы должны бросить все дела и заставить себя учить Форт.
      </p>
    )
  }
};

export default monsters;
