import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Billboard from "./billboard";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px var(--main-padding);
  border-bottom: 1px solid var(--main-color);
`;

const Logo = styled.div`
  width: 50px;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-left: 30px;
  padding: 10px;
  border: ${(props) => (props.current ? `1px solid var(--main-color)` : 0)};
  border-radius: 50%;
  transition: all 200ms ease;

  &:hover {
    color: var(--reverse-color);
  }
`;

const SLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

// withRouter를 사용하여 location에 접근
const NavBar = ({ location: { pathname } }) => {
  return (
    <>
      <Nav>
        <Logo />
        <List>
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
      </Nav>
      <Billboard text={getText(pathname)} />
    </>
  );
};

export default withRouter(NavBar);

// 경로에 맞는 텍스트로 변환해주기 위한 함수
const getText = (pathname) => {
  switch (pathname) {
    case "/":
      return `home`;
    case "/skills":
      return `skills`;
    case "/projects":
      return `projects`;
    case "/aboutme":
      return `aboutme`;
    case "/contact":
      return `contact`;
    default:
      return `hello`;
  }
};
