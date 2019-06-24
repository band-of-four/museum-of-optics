import React from 'react';
import { View, Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go, user, resetSavestate }) => (
  <View id={id} activePanel="main">
    <Panel id="main">
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
        <Div style={{ textAlign: "center" }}>
          <Button size="l" level="1" onClick={go} data-to="color-tiles-game">Поехали</Button>
        </Div>
      </Group>

      <Group title="Карта квеста">
        <Div style={{ textAlign: "center" }}>
          <Button size="l" level="1" stretched={true} onClick={go} data-to="quest-map">Посмотреть</Button>
        </Div>
      </Group>

      <Group title="Сохраненное прохождение">
        <Div style={{ textAlign: "center" }}>
          <Button size="l" level="1" stretched={true} onClick={resetSavestate}>Сбросить</Button>
        </Div>
      </Group>
    </Panel>
  </View>
);

export default Home;
