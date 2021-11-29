import styled from 'styled-components';
import logo from '../../logo.svg';
import archiveIcon from '../../../assets/icons/archive.svg';
import cameraIrisIcon from '../../../assets/icons/camera-iris.svg';
import searchIcon from '../../../assets/icons/search-icon.svg';

export default function LaunchAppButton(): JSX.Element {
  return (
    <NavContainer>
      <NavUpperContainer>
        <img src={searchIcon} height="40px" alt="" />
        <CenterIconBackground src={cameraIrisIcon} height="120px" alt="" />
        <img src={archiveIcon} height="40px" alt="" />
      </NavUpperContainer>
      <NavLowerContainer>
        <img src={logo} height="40px" alt="" />
      </NavLowerContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'Top' 'Bottom';
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: var(--black);
`;

const NavUpperContainer = styled.div`
  grid-area: Top;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  background-color: var(--yellow-dark);
  overflow: visible;
  max-height: 50px;
`;

const NavLowerContainer = styled.div`
  grid-area: Bottom;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

const CenterIconBackground = styled.img`
  background-color: var(--yellow-dark);
  border: 2px solid var(--black);
  border-radius: 100%;
  padding: 2px;
`;
