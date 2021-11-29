import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '../../../assets/animations/lottie-pulse.json';
import styled from 'styled-components';

export default function MyLottieComponent(): JSX.Element {
  const containerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerElement.current) {
      return;
    }

    Lottie.loadAnimation({
      container: containerElement.current,
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);

  return <StyledContainer ref={containerElement} />;
}

const StyledContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
`;
