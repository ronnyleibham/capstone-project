import styled from 'styled-components';
import { useRef, useEffect } from 'react';

export default function CamDeviceInterface(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const photoRef = useRef(null);

  // const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: 1080,
          height: 720,
          facingMode: 'environment',
        },
      });

      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        video.onloadedmetadata = async () => {
          try {
            await video.play();
          } catch (error) {
            alert(JSON.stringify(error));
          }
        };
      }
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (videoRef) {
      getVideo();
    }
  }, [videoRef]);

  return (
    <StyledContainer>
      <StyledVideo>
        <video ref={videoRef} playsInline />
      </StyledVideo>
      <StyledPhoto>
        <canvas ref={photoRef} />
      </StyledPhoto>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-height: 100vh;
  position: relative;
`;

const StyledVideo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const StyledPhoto = styled.div``;
