import React from 'react';
import HeavyKnight from '../img/monsters/heavy_knight.png';
import HeavyKnightDefeated from '../img/monsters/heavy_knight_defeated.png';
import ForgottenFortress from '../img/monsters/forgotten_fortress.png';
import ForgottenFortressDefeated from '../img/monsters/forgotten_fortress_defeated.png';
import Specular from '../img/monsters/specular.png';
import Medusa from '../img/monsters/medusa.png';
import MedusaDefeated from '../img/monsters/medusa_defeated.png';
import Troll3D from '../img/monsters/troll_3d.png';
import Troll3Defeated from '../img/monsters/troll_3d_defeated.png';
import VioletDemon from '../img/monsters/violet_demon.png';
import VioletDemonDefeated from '../img/monsters/violet_demon_defeated.png';

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
  5: {
    name: 'Медуза',
    sprite: Medusa,
    spriteDefeated: MedusaDefeated,
    description: 'Ты слышишь шипение, доносящееся из-за поворота. Инстинкты подсказывают, что лучше не смотреть ей в глаза. Что-то должно помочь обойти её и не превратиться в камень.',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
  6: {
    name: 'Трехмерный Тролль',
    sprite: Troll3D,
    spriteDefeated: Troll3Defeated,
    description: 'Грозный вид существа перед тобой не сулит ничего хорошего. А ещё хуже то, что на нем лежит какая-то магия - облик монстра расплывается и поразить цель становится практически невозможно! Нужно найти приспособление, способное снова собрать контуры существа воедино.',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
  7: {
    name: 'Фиолетовый Демон',
    sprite: VioletDemon,
    spriteDefeated: VioletDemonDefeated,
    description: 'Злобный рык раздаётся за твоей спиной, Ты оборачиваешься, но никого не видишь. Кажется, твой противник не видим. Может быть он проявится в другом спектре?',
    correctQr: 'test',
    hint: (
      <p>
        --
      </p>
    )
  },
};

export default monsters;
