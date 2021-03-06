import styled from 'styled-components';
import logo from '../../logo.svg';
import archiveIcon from '../../../assets/icons/archive.svg';
import cameraIrisIcon from '../../../assets/icons/camera-iris.svg';
import searchIcon from '../../../assets/icons/search-icon.svg';

export default function NavBarMain(): JSX.Element {
  return (
    <NavContainer>
      <NavUpperContainer>
        <a href="#">
          <StylingImage src={searchIcon} height="40px" alt="" />
        </a>
        <a href="#">
          <CenterIconBackground src={cameraIrisIcon} height="120px" alt="" />
        </a>
        <a href="#">
          <StylingImage src={archiveIcon} height="40px" alt="" />
        </a>
      </NavUpperContainer>
      <NavLowerContainer>
        <a href="#">
          <img src={logo} height="40px" alt="" />
        </a>
      </NavLowerContainer>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  border-top: 3px solid var(--black);
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
  z-index: 10;
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

const StylingImage = styled.img`
  padding: 2px 20px;
`;
