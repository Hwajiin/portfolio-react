import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import NavbarMenu from "./navbar-menu";

const Icon = styled.button`
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  top: 90px;
  right: 0;
  width: 100%;
  border-bottom: 1px solid var(--main-color);
`;

const NavbarIcon = ({ location: { pathname } }) => {
  const [menu, setMenu] = useState(false);

  const onClick = () => setMenu(!menu);

  return (
    <>
      <Icon onClick={onClick}>Nav</Icon>
      {menu ? (
        <Box>
          <NavbarMenu pathname={pathname} direction="column" />
        </Box>
      ) : null}
    </>
  );
};

export default withRouter(NavbarIcon);
