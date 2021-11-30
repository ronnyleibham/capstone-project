import NavBarMain from './NavBarMain';

export default {
  title: 'Component/NavBarMain',
  component: NavBarMain,
  parameters: { layout: 'fullscreen' },
};

export const NavBar1 = (): JSX.Element => <NavBarMain></NavBarMain>;
