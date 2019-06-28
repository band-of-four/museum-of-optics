import React, { useState, useEffect, useRef } from 'react';
import { View, Panel, PanelHeader, FixedLayout } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import '../css/QuestMap.css';
import { nodeLocations, computePaths, isForestUnlocked } from '../lib/savestate';

export default function QuestMap({ id, go, savestate, attachOnTransition }) {
  const [view, setView] = useState('quest-map-main');

  const mapBottomRef = useRef(null);
  useEffect(() => {
    attachOnTransition((from) => {
      from === 'color-tiles-game' && mapBottomRef.current &&
        requestAnimationFrame(() => mapBottomRef.current.scrollIntoView({ behavior: 'smooth' }));
    })
  }, []);

  return (
    <View id={id} activePanel={view}>
      <Panel id="quest-map-main" theme="white">
        <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>Карта</PanelHeader>
        <FixedLayout vertical="top">
          <div className="map-help-overflow">
            <button className="map-help-button" onClick={() => setView('quest-map-help')}>
              <span className="map-help-button__content"><Icon28HelpOutline /></span>
            </button>
          </div>
        </FixedLayout>
        <div className="map-container">
          <svg className="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 264">
            {nodeLocations.map(renderMapNode(savestate, go))}
            {renderForest(savestate, go)}
            {renderPaths(savestate)}
          </svg>
          {<div ref={mapBottomRef} />}
        </div>
      </Panel>
      <Panel id="quest-map-help" theme="white" centered>
        <PanelHeader left={<PanelHeaderBack onClick={() => setView('quest-map-main')} />}>Записки странника</PanelHeader>
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

const renderMapNode = (savestate, go) => ({ x, y, id }) => {
  switch (savestate[id]) {
    case 'completed':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--completed" />;
    case 'locked':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--locked" />
    case 'available':
      return <circle key={id} cx={x} cy={y} r="6" className="map-node--available"
        onClick={go} data-to="monster" data-monster-id={id} />;
  }
};

const renderForest = (savestate, go) => {
  const forestUnlocked = isForestUnlocked(savestate);
  return (
    <g className={forestUnlocked ? 'map-node--available' : 'map-node--locked'}
      onClick={forestUnlocked ? go : undefined} data-to="forest">
      <circle cx="34" cy="10.5" r="10" />
      <path strokeLinejoin="round" d="M30.5 8.8h2.1l-3.3 3.7H33v3.6h2.2v-3.6h3.5l-3.3-3.8h2.1L34 4.1z" />
    </g>
  );
};

const renderPaths = (savestate) =>
  computePaths(savestate).map(({ state, ...svg }, i) => (
    <path key={i} className={`map-path map-path--${state}`} {...svg} />
  ));
