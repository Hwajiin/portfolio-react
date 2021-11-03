import React from "react";
import styled from "styled-components";

const SPage = styled.div``;

const Title = styled.h1`
  font-size: 5em;
`;

const Page = ({ title, children }) => {
  return (
    <SPage>
      <Title>{title}</Title>
    </SPage>
  );
};

export default Page;
