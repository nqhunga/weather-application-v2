import styled from 'styled-components';
import { Container, NavLink } from 'reactstrap';

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
  height: 100%;
  padding: 0 20px 50px 20px;
  margin-top: 20px;

  @media (max-width: 575px) {
    position: relative;
  }
`;

export const TabWrapper = styled(Container)`
  background-color: white;
  border: 1px solid beige;
  padding: 20px;
  overflow: auto;
  height: 100%;  
  @media (max-width: 575px) {
    position: relative;
    overflow: auto;
    height: 100%;
  }
`;

export const TabItem = styled.div`
  position: absolute;
  display: block;
  opacity: 0;
  transform: translateY(100vh);
  left: 0;
  right: 0;
  -webkit-transition: opacity 2s cubic-bezier(0.7, -0.24, 0.14, 1.78),transform 2s cubic-bezier(0.76, 1.19, 1, 1);
  -moz-transition: opacity 2s cubic-bezier(0.7, -0.24, 0.14, 1.78),transform 2s cubic-bezier(0.76, 1.19, 1, 1);
  -o-transition: opacity 2s cubic-bezier(0.7, -0.24, 0.14, 1.78),transform 2s cubic-bezier(0.76, 1.19, 1, 1);
  transition: opacity 2s cubic-bezier(0.7, -0.24, 0.14, 1.78),transform 2s cubic-bezier(0.76, 1.19, 1, 1);

  @media (max-width: 575px) {
    display: none;
  }
  @media screen and (max-height: 575px) and (orientation: landscape) {
    display: none;
  }
`;

export const NavLinkEx = styled(NavLink)`
  cursor: pointer;
  &:hover {
    background-color: #515966;
    color: #f2f4f7 !important;
  }
`;