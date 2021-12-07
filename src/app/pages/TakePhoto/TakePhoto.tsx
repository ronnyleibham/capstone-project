import styled from 'styled-components';
import CamDeviceInterface from '../../components/CamDeviceInterface/CamDeviceInterface';
import NavBarCamera from '../../components/NavBarCamera/NavBarCamera';

export default function TakePhoto(): JSX.Element {
  function handleTakePhoto() {
    const width = 1080;
    const height = 720;

    const video = document.getElementsByTagName('video')[0];
    const photo = document.createElement('canvas') as HTMLCanvasElement;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext('2d');
    if (!ctx) {
      return;
    }
    ctx.drawImage(video, 0, 0, width, height);

    const dataURI = photo.toDataURL('image/png');
    localStorage.setItem('image', dataURI);
  }

  localStorage.getItem('image');

  return (
    <StyledBody>
      <StyledHeading>Take a picture</StyledHeading>
      <StyledLivePicture id="test">
        <CamDeviceInterface />
      </StyledLivePicture>
      <NavBarCamera onClick={handleTakePhoto} />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas: 'Top' 'Center';
  justify-items: center;
  height: 90vh;
`;

const StyledHeading = styled.div`
  align-self: start;
  grid-area: Top;
  font-family: CocoGooseLight;
  font-size: 2.5em;
  font-weight: 500;
  padding-top: 30px;
`;

const StyledLivePicture = styled.div`
  display: flex;
  justify-content: center;
  grid-area: Center;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;
