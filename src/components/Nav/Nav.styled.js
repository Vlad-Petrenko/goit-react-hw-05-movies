import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavRoute = styled(NavLink)`
  box-shadow: 3px 4px 0px 0px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 15px;
  border: 1px solid #29668f;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 7px 25px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  margin: 15px;
  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
