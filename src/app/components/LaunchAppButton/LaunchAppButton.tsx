// import * as LottiePlayer from '@lottiefiles/lottie-player';
import React from 'react';
import styled from 'styled-components';
// require('@lottiefiles/lottie-player');

export default function LaunchAppButton(): JSX.Element {
  return (
    <StyledButton>
      <InnerCircle></InnerCircle>
      <ButtonText>LAUNCH</ButtonText>
      {/* <lottie-player
        autoplay="true"
        controls
        loop="true"
        mode="normal"
        src="./lottie-pulse.json"
        style={{ width: 600 + 'px' }}
      ></lottie-player> */}
    </StyledButton>
  );
}

const StyledButton = styled.div`
  position: relative;
  width: 9em;
  height: 9em;
  border-radius: 100%;
  border: solid white 4px;
`;

const InnerCircle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 100%;
  border: solid white 2px;
`;

const ButtonText = styled.div`
  font-family: CocoGooseLight;
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 0.1em;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
