import React from 'react';
import HeavyKnight from '../img/monsters/heavy_knight.png';
import HeavyKnightDefeated from '../img/monsters/heavy_knight_defeated.png';
import ForgottenFortress from '../img/monsters/forgotten_fortress.png';
import ForgottenFortressDefeated from '../img/monsters/forgotten_fortress_defeated.png';
import Specular from '../img/monsters/specular.png';

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
    description: 'Дорогу перегородила гигантская цитадель. На вид она сделана из слегка прозрачного пластика... Незнакомый путник сказал, что обитатели цитадели покинули её много лет назад, и теперь она только закрывает Солнце близлежащим городам и преграждает дорогу. Один точный выстрел из камнемета мог бы решить проблемы местных и заодно открыть дорогу дальше, только нужно найти слабое место конструкции.',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
  4: {
    name: 'Зеркальный',
    sprite: Specular,
    spriteDefeated: Specular,
    description: 'Что происходит? Лево и право поменялись местами. Похоже это проделки существа, что стоит пред тобой. Как вернуть всё в норму и победить его?',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
};

export default monsters;
