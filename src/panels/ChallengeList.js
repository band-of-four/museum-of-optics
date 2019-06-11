import React from 'react';
import { Panel, PanelHeader, Group, List, Cell, Div, Input, CellButton } from '@vkontakte/vkui';
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import '../css/ChallengeList.css';
import Icon24Done from '@vkontakte/icons/dist/24/done';

export default function ChallengeList(props) {
  return (
    <Panel id={props.id}>
      <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
        Оптоклоны и голограммы
      </PanelHeader>
      <Group title="Выполненные">
        <List>
          <Cell before={<Icon24Done />}>Посчитай оптоклоны яиц Фаберже</Cell>
          <Cell before={<Icon24Done />}>Попрости допуск у голограммы Стафеева</Cell>
        </List>
      </Group>
      <Group title="Я — легенда">
        <Div>Сколько сцен видишь?</Div>
        <Div>
          <Input type="text" defaultValue="0" alignment="center" />
        </Div>
        <CellButton>Это мой окончательный ответ</CellButton>
      </Group>
    </Panel>
  );
}
