import 'core-js/es6';
import 'core-js/es7';
import * as smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import App from './App';

smoothscroll.polyfill();

connect.send('VKWebAppInit', {});

ReactDOM.render(<App />, document.getElementById('root'));
