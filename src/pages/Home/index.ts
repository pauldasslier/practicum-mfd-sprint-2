import Block from '../../utils/Block';
import { Button } from '../../components/Button';

interface HomePageProps {
  title: string;
}

export class HomePage extends Block<HomePageProps> {
  constructor(props: HomePageProps) {
    super('div', props);
  }

  init() {
    this.children.button = new Button({
      label: 'Click me',
      events: {
        click: () => console.log('clicked'),
      },
    });
  }

  render() {
    return this.compile(`
        <h1>{{title}}</h1>
        {{{button}}}
    `, this.props);
  }
}
