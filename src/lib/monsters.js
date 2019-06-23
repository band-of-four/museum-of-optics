import React from 'react';
import HeavyKnight from '../img/monsters/heavy_knight.png';
import HeavyKnightDefeated from '../img/monsters/heavy_knight_defeated.png';
import ForgottenFortress from '../img/monsters/forgotten_fortress.png';
import ForgottenFortressDefeated from '../img/monsters/forgotten_fortress_defeated.png';

const monsters = {
  2: {
    name: 'Бронированный Рыцарь',
    sprite: HeavyKnight,
    spriteDefeated: HeavyKnightDefeated,
    description: 'На твоём пути встал огромный рыцарь. Он угрожающе поднимает меч. Всё его тело надёжно защищено доспехом. Или нет? Найди способ узнать, где нет брони, чтобы атаковать.',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
  3: {
    name: 'Забытая Цитадель',
    sprite: ForgottenFortress,
    spriteDefeated: ForgottenFortressDefeated,
    description: 'На твоём пути встал огромный рыцарь. Он угрожающе поднимает меч. Всё его тело надёжно защищено доспехом. Или нет? Найди способ узнать, где нет брони, чтобы атаковать.',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
};

export default monsters;
