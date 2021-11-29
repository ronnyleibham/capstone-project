import NavBarMain from './NavBarMain';

export default {
  title: 'Component/NavBarMain',
  component: NavBarMain,
  parameters: { layout: 'fullscreen' },
};

export const LaunchButton = (): JSX.Element => <NavBarMain></NavBarMain>;
