import styled from 'styled-components';
import logo from '../../logo.svg';
import LaunchAppButton from '../../components/LaunchAppButton/LaunchAppButton';

export default function LaunchApp(): JSX.Element {
  return (
    <StyledBody>
      <StyledHeading>TECH DEMO</StyledHeading>
      <StyledImage>
        <img src={logo} height="100vw" alt="" />
      </StyledImage>
      <StyledButton>
        <LaunchAppButton />
      </StyledButton>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'Top' 'Center' 'Bottom';
  justify-items: center;
  height: 100vh;
`;

const StyledHeading = styled.div`
  align-self: start;
  grid-area: Top;
  font-family: CocoGooseLight;
  font-size: 2.5em;
  font-weight: 500;
  padding-top: 30px;
`;

const StyledImage = styled.div`
  align-self: center;
  grid-area: Center;
`;

const StyledButton = styled.div`
  align-self: end;
  grid-area: Bottom;
  padding-bottom: 30px;
`;
