import React from 'react';
import { Panel, PanelHeader, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import '../css/Quiz.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

export default function Quiz(props) {
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={<HeaderButton onClick={props.go} data-to="home">
          {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </HeaderButton>}>
        Quiz
    </PanelHeader>
    </Panel>
  );
}
