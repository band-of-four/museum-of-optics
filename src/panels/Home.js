import React from 'react';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

const Home = ({ id, go, user }) => (
  <Panel id={id}>
    <PanelHeader>ｓａｍｐｌｅ ａｐｐ</PanelHeader>
    {user &&
      <Group title="Привет">
        <ListItem
          before={user.photo_200 ? <Avatar src={user.photo_200} /> : null}
          description={(user.city && user.city.title) || ''}>
          {`${user.first_name} ${user.last_name}`}
        </ListItem>
      </Group>}

    <Group title="Навигация">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="quiz">
          Квиз
        </Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
