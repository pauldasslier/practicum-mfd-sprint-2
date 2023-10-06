import Block from '../../utils/Block';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input'

export class HomePage extends Block {
  constructor() {
    super('div', { title: 'Home Page'});
  }

  init() {
    this.children.button = new Button({
      label: 'Кликни меня',
      events: { click: () => console.log('Click') },
    });
    this.children.input = new Input({
      events: {
        focus: () => { console.log(this.children.input.isValid) },
      }
    });
  }
  
  render() {
    return this.compile(`
      <h1>{{title}}</h1>
      {{{button}}}
      {{{input}}}
    `, this.props);
  };
}