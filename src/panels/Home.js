import React from 'react';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader, Progress, InfoRow } from '@vkontakte/vkui';

const Home = ({ id, go, user }) => (
  <Panel id={id}>
    <PanelHeader>Квест</PanelHeader>
    {user &&
      <Group title="Привет">
        <ListItem
          before={user.photo_200 ? <Avatar src={user.photo_200} /> : null}
          description={(user.city && user.city.title) || ''}>
          {`${user.first_name} ${user.last_name}`}
        </ListItem>
      </Group>}

    <Group title="Выбери свой цвет">
      <Div>
        <Button size="l" level="1" stretched={true} onClick={go} data-to="color-tiles-game">Поехали</Button>
      </Div>
    </Group>

    <Group title="Оптоклоны и голограммы">
      <Div>
        <InfoRow title="Пройдено 2 из 10"><Progress value={20} /></InfoRow>
      </Div>
      <Div>
        <Button size="l" level="1" stretched={true} onClick={go} data-to="challenge-list">Продолжить</Button>
      </Div>
    </Group>

    <Group title="Каталог Аббе">
      <Div>
        <InfoRow title="Пройдено 0 из 10"><Progress value={0} /></InfoRow>
      </Div>
      <Div>
        <Button size="l" level="2" stretched={true} onClick={go} data-to="home">Начать</Button>
      </Div>
    </Group>

    <Group title="Свет">
      <Div>
        <InfoRow title="Пройдено 0 из 10"><Progress value={0} /></InfoRow>
      </Div>
      <Div>
        <Button size="l" level="2" stretched={true} onClick={go} data-to="home">Начать</Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
