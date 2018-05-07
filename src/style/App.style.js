import { Container, TabContent, Alert, Jumbotron } from 'reactstrap';
import { Tabs } from 'react-tabs';
import styled from 'styled-components';
import '../style/style.css';

export const ContainerEx = styled(Container) `
  background-image: linear-gradient( #0f7677, #91a0d6 );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  @media (max-width: 576px) {
    width: 100%;
    padding: 0;
    margin: 0 auto;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5px;
    margin: 0 auto;
    height: auto;
  }
  @media (max-width: 992px) {
  }
`;

export const ContainerBF = styled(Container)`
  width: 100vw;
  height: 100vh;
  padding: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
  margin-left: 60%;
`;

export const TabContentEx = styled(TabContent) `
  padding: 30px;
  .changeTab-enter {
    opacity: 0.01;
  }
`;

export const JumbotronEx = styled(Jumbotron) `
`;

export const AlertEx = styled(Alert) `
  margin: 0 5px 0 0;
  padding: 3px 5px 3px 5px;
`;

export const JumboDisplay = styled.div`
  margin-bottom: 5px;
`;
