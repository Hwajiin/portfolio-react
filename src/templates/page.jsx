import React from "react";
import styled from "styled-components";

const SPage = styled.div`
  margin: 120px var(--main-padding) 50px var(--main-padding);
`;

const Title = styled.span`
  font-size: 5em;
  text-transform: capitalize;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Page = ({ title, children }) => {
  return (
    <SPage>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </SPage>
  );
};

export default Page;
