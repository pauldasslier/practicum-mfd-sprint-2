import { HomePage } from "./pages/HomePage";

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;

  const component = new HomePage();

  root.append(component.element!);

  component.dispatchComponentDidMount();
});

