import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Billboard from "./billboard";
import NavbarIcon from "./navbar-icon";
import NavbarMenu from "./navbar-menu";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: var(--main-background-color);
  z-index: 99;
`;

const Container = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--main-padding);
  border-bottom: 1px solid var(--main-color);
`;

const Logo = styled.div`
  width: 20%;
`;

const NavBar = ({ location: { pathname } }) => {
  // window.innerWidth를 알아내기 위한 로직
  const [width, setWidth] = useState(null);
  useEffect(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  // navBar icon 설정을 위한 로직
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (width <= 640) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  }, [width]);

  return (
    <>
      <Nav>
        <Container>
          <Logo />
          {icon ? <NavbarIcon /> : <NavbarMenu pathname={pathname} />}
        </Container>
        <Billboard text={getText(pathname)} />
      </Nav>
    </>
  );
};

// withRouter를 사용하여 location에 접근
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
