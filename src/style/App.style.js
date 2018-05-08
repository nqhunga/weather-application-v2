import { Container, TabContent, Alert, Jumbotron } from 'reactstrap';
import { Tabs } from 'react-tabs';
import styled from 'styled-components';
import '../style/style.css';

export const ContainerEx = styled(Container) `
  background-image: linear-gradient( #0f7677, #91a0d6 );
  height: 100vh;
  position: relative;
  padding: 30px 0 30px 0 !important;
  overflow: hidden;
  
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave.fade-leave-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }

  @media screen and (max-height: 575px) and (orientation: landscape) {
    overflow: auto;
  }

  @media (max-width: 575px) {
    width: 100vw;
    padding: 50px 0 10px !important;
    margin: 0 auto;
    height: 100vw;
    overflow: auto;
    padding-bottom: 5px !important;
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 0 5px;
    margin: 0 auto;
    height: 100vh;
  }
  @media (max-width: 992px) {
  }
`;

export const ContainerBF = styled(Container)`
  width: 100vw;
  height: 100%;
  padding: 0 !important;
  overflow: hidden;
  
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
  margin-left: 60%;

  @media (max-width: 575px) {
    width: 60%;
    margin-left: 40%;
  }
`;

export const TabContentEx = styled(TabContent) `
  padding: 30px;
  .changeTab-enter {
    opacity: 0.01;
  }
`;

export const JumbotronEx = styled(Jumbotron) `
  margin-bottom: 0 !important;
  padding: 20px !important;
  margin: 0 auto;
  max-width: 400px;
`;

export const AlertEx = styled(Alert) `
  margin: 0 5px 0 0;
  padding: 3px 5px 3px 5px;
`;

export const JumboDisplay = styled.div`
  margin-bottom: 5px;
`;

export const Spinner = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: whitesmoke;
  }
`;
