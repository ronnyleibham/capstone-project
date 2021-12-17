import LaunchAppButton from './LaunchAppButton';

export default {
  title: 'Component/LaunchAppButton',
  component: LaunchAppButton,
};

export const LaunchButton = (): JSX.Element => (
  <LaunchAppButton
    onClick={function (): void {
      throw new Error('Function not implemented.');
    }}
  ></LaunchAppButton>
);
