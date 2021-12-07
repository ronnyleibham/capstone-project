import NavBarCamera from './NavBarCamera';

export default {
  title: 'Component/NavBarCamera',
  component: NavBarCamera,
  parameters: { layout: 'fullscreen' },
};

export const NavBar2 = (): JSX.Element => (
  <NavBarCamera
    onClick={function (): void {
      throw new Error('Function not implemented.');
    }}
  ></NavBarCamera>
);
