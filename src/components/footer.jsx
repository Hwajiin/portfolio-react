import React from "react";
import styled from "styled-components";

const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  border-top: 1px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-background-color);
`;

const Text = styled.p`
  font-size: var(--xs-font-size);
`;

const Footer = () => {
  return (
    <SFooter>
      <Text>CopyrightÂ© 2021.borderline0px.All rights reserved.</Text>
    </SFooter>
  );
};

export default Footer;
