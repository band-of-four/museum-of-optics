import React from 'react';
import { View, Panel, PanelHeader, HeaderButton } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';

export default function QuestMapHelp({ id, go }) {
  const backButton = <HeaderButton onClick={go} data-to="quest-map">
    <Icon28DoneOutline />
  </HeaderButton>;
  return (
    <View id={id} activePanel="quest-map-help-main">
      <Panel id="quest-map-help-main" theme="white" centered>
        <PanelHeader left={backButton}>Секреты Ордена Оптики</PanelHeader>
        <div className="map-help-container">
          <svg className="map" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 20.6 20.6">
            <g className="map-node--locked">
              <path stroke-linejoin="bevel" d="M19.7 10.5a9.6 9.6 0 0 1-9.6 9.6 9.6 9.6 0 0 1-9.6-9.6A9.6 9.6 0 0 1 10.1 1a9.6 9.6 0 0 1 9.6 9.5z" />
              <path stroke-linejoin="round" d="M6.6 9.2h2.2L5.4 13H9v3.6h2.2V13h3.5l-3.3-3.8h2.1l-3.4-4.7z" />
            </g>
          </svg>
          <p>
            Дорога к Оптическому Лесу — не секрет, но попасть в него может далеко не каждый!
          </p>
          <p>
            Сначала тебе придется победить всех монстров, что охраняют его, используя оптические артефакты.
          </p>
          <svg className="map" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 20.6 20.6">
            <circle cx="10" cy="10" r="6" className="map-node--available" />
          </svg>
          <p>
            Нажми на открытую тебе точку на карте, чтобы сразиться с монстром.
          </p>
          <svg className="map" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 20.6 20.6">
            <circle cx="10" cy="10" r="6" className="map-node--locked" />
          </svg>
          <p>
            С каждой победой тебе будут открываться новые точки, которые недоступны сейчас.
          </p>
        </div>
      </Panel>
    </View>
  );
}
