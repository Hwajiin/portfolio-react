import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import NavbarMenu from "./navbar-menu";

const Icon = styled.button`
  all: unset;
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const Hamburger = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: var(--main-color);
  transform: rotate(0);
  box-shadow: 0px -7px 0px var(--main-color);
  transition: all 0.3s ease-in;
  ${({ open }) => {
    return open
      ? `
      transform: rotate(45deg);
      box-shadow: 0px 0px 0px var(--main-color);
    `
      : null;
  }}

  &:after {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--main-color);
    transform: rotate(0);
    transition: all 0.3s ease-in;
    ${({ open }) => {
      return open
        ? `
      transform: rotate(90deg);
      top: 0;
    `
        : null;
    }}
  }
`;

const Box = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  width: 100%;
  border-bottom: 1px solid var(--main-color);
`;

const NavbarIcon = ({ location: { pathname } }) => {
  // Nav Toggle button을 위한 hook과 함수
  const [menu, setMenu] = useState(false);

  const onClick = () => setMenu(!menu);

  return (
    <>
      <Icon onClick={onClick}>
        <Hamburger open={menu} />
      </Icon>
      {menu ? (
        <Box>
          <NavbarMenu pathname={pathname} direction="column" open={menu} />
        </Box>
      ) : null}
    </>
  );
};

export default withRouter(NavbarIcon);
