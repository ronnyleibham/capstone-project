import CamDeviceInterface from './CamDeviceInterface';

export default {
  title: 'Component/CamDeviceInterface',
  component: CamDeviceInterface,
  parameters: { layout: 'fullscreen' },
};

export const CamInterface = (): JSX.Element => (
  <CamDeviceInterface></CamDeviceInterface>
);
