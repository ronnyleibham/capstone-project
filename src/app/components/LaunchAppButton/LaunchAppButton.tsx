import styled from 'styled-components';
import LottiePulse from '../LottiePulse/LottiePulse';

type LaunchAppButtonProps = {
  onClick: () => void;
};

export default function LaunchAppButton({
  onClick,
}: LaunchAppButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick}>
      <InnerCircle></InnerCircle>
      <ButtonText>LAUNCH</ButtonText>
      <LottiePulse />
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
