import React from "react";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 150px;
  font-family: "Press Start 2P", cursive;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
`;

const Title = styled.p`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  display: inline-block;
  font-size: 9px;
  line-height: 17px;
  background-color: var(--main-color);
  color: black;
`;

const SkillItem = ({ item }) => {
  return (
    <Container>
      <Box>
        <Image url={item && item.img} />
      </Box>

      <Title>{item && item.name}</Title>
    </Container>
  );
};

export default SkillItem;
