import React from 'react';
import { getClassName, View, Panel, PanelHeader, Div, Button, PopoutWrapper } from '@vkontakte/vkui';
import '../css/Forest.css';

const popoutClass = getClassName('forest-popout');

export default class Forest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'forest-intro',
      popout: null,
      letters: ['?', '?', '?', '?']
    };
  }

  render() {
    return (
      <View id={this.props.id} activePanel={this.state.view} popout={this.state.popout}>
        <Panel id="forest-intro" theme="white">
          <PanelHeader>Лес</PanelHeader>
          <Div style={{ textAlign: "center" }}>
            <p>
              Лес приветствует тебя
            </p>
            <Button size="l" level="1" onClick={() => this.setState({ view: 'forest-code' })}>
              Поприветствовать лес в ответ
            </Button>
          </Div>
        </Panel>
        <Panel id="forest-code" theme="white">
          <PanelHeader>Лес</PanelHeader>
          <Div style={{ textAlign: "center" }}>
            <p>
              Хмм, код... Какой такой код?
            </p>
            <div className="forest-letter-container">
              {this.props.colors.map((c, i) =>
                <button key={i} data-index={i} className={`forest-letter forest-letter--${c}`} onClick={this.showLetterPopout(i)}>
                  <span className="forest-letter__text">{this.state.letters[i]}</span>
                </button>
              )}
            </div>
          </Div>
        </Panel>
      </View>
    );
  }

  showLetterPopout = (letterIdx) => () => {
    const setLetter = (letter) => () => {
      const letters = this.state.letters.slice();
      letters[letterIdx] = letter;
      this.setState({ letters });
    };
    this.setState({
      popout: (
        <PopoutWrapper v="center" h="center" onClick={() => this.setState({ popout: null })}>
          <div className={popoutClass}>
            <button className="forest-popout__letter" onClick={setLetter('α')}>α</button>
            <button className="forest-popout__letter" onClick={setLetter('β')}>β</button>
            <button className="forest-popout__letter" onClick={setLetter('λ')}>λ</button>
            <button className="forest-popout__letter" onClick={setLetter('μ')}>μ</button>
          </div>
        </PopoutWrapper>
      )
    });
  }
}
