import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 10%;
  height: 90%;
  font-family: "Press Start 2P", cursive;
`;

const Image = styled.div``;

const Title = styled.p``;

const SkillItem = ({ skill }) => {
  return (
    <Box>
      <Image />
      <Title>{skill.name}</Title>
    </Box>
  );
};

export default SkillItem;
