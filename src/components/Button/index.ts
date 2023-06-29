import Block from '../../utils/Block';


interface ButtonProps {
  label: string;
  events: {
    click: () => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  render() {
    return this.compile(`{{label}}`, this.props);
  }
}
