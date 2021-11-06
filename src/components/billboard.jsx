import React from "react";
import styled, { keyframes } from "styled-components";

// 텍스트 무한반복 슬라이드 애니메이션
const moveTextFirst = keyframes`
    0% {
        transform: translateX(100%)
    }
    100%{
        transform: translateX(-100%)
    }
`;

const moveTextSec = keyframes`
    0% {
        transform: translateX(0%)
    }
    100%{
        transform: translateX(-200%)
    }
`;

const Container = styled.div`
  width: 100%;
  height: 30%;
  border-bottom: 1px solid var(--main-color);
  background-color: var(--main-background-color);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const First = styled.div`
  animation: ${moveTextFirst} 30s infinite linear;
`;

const Second = styled.div`
  animation: ${moveTextSec} 30s infinite linear;
  animation-delay: 15s;
`;

const Text = styled.span`
  text-transform: uppercase;
  margin-right: 60px;
`;

const Billboard = ({ text }) => {
  return (
    <Container>
      <Box>
        <First>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
        </First>
        <Second>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
          <Text>{text}</Text>
        </Second>
      </Box>
    </Container>
  );
};

export default Billboard;
