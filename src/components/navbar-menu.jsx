import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-self: flex-end;
  background-color: var(--main-background-color);
  transition: opacity 0.2s ease-in;

  ${({ direction }) => {
    return direction === "column"
      ? `
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
    `
      : null;
  }};
`;

const Item = styled.li`
  padding: 10px;
  border-radius: 50%;
  ${({ current }) => {
    return current
      ? `
      border: 1px solid var(--reverse-color);
      font-style: italic;
      color: var(--reverse-color);
    `
      : null;
  }}

  transition: all 200ms ease;

  &:hover {
    color: var(--reverse-color);
    font-style: italic;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const NavbarMenu = ({ pathname, direction = "row" }) => {
  // TODO: nav smooth animation and toggle function
  return (
    <List direction={direction}>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/skills"}>
        <SLink to="/skills">Skills</SLink>
      </Item>
      <Item current={pathname === "/projects"}>
        <SLink to="/projects">Projects</SLink>
      </Item>
      <Item current={pathname === "/aboutme"}>
        <SLink to="/aboutme">About Me</SLink>
      </Item>
      <Item current={pathname === "/contact"}>
        <SLink to="/contact">Contact</SLink>
      </Item>
    </List>
  );
};

export default NavbarMenu;
