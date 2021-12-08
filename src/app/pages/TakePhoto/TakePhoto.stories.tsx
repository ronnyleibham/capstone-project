import TakePhoto from './TakePhoto';

export default {
  title: 'Component/TakePhoto',
  component: TakePhoto,
  parameters: { layout: 'fullscreen' },
};

export const PhotoCamera = (): JSX.Element => <TakePhoto></TakePhoto>;
