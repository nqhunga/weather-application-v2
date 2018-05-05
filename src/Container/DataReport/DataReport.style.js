import styled from 'styled-components';
import { Container } from 'reactstrap';

export const TabContent = styled(Container)`
  padding-top: 15px;
  padding-bottom: 5px;
  background-color: white;
  border: 0.5px solid #dee2e6;
  .changeTab-enter {
    opacity: 0;
    transform:   translate(-250px,0);
    transform: translate3d(-250px,0,0);
  }
  .changeTab-enter.changeTab-enter-active {
  opacity: 1;
  transition: opacity 1s ease;
  transform:   translate(0,0);
  transform: translate3d(0,0,0);
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;
  }
  .changeTab-leave {
  opacity: 1;
  transform:   translate(0,0,0);
  transform: translate3d(0,0,0);
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.175, 0.665, 0.320, 1), linear;
  }
  .changeTab-leave.changeTab-leave-active {
    position: absolute;
  opacity: 0;
  transform:   translate(250px,0);
  transform: translate3d(250px,0,0);
  }
`;

export const NavWrapper = styled.ul`

  display: flex;
  padding: 5px;
  flex-direction: row;
`;

export const NavTab = styled.li`
  display: block;
  list-style: none;
  padding: 3px;
`;

export const DataWrapper = styled(Container)`
  background-color: #f2f7f3;
  max-height: 100vh;
  height: auto;
  padding: 0 20px 50px 20px;
  margin-top: 20px;
`;