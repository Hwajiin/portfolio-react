import React from "react";
import styled from "styled-components";

const Box = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  /* font-family: "Press Start 2P", cursive; */
`;

const ImageHolder = styled.div`
  width: 90px;
  height: 90px;
  /* border: 1px solid var(--main-color);
  border-radius: 5px;
  overflow: hidden; */
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
  font-size: var(--xs-font-size);
  line-height: 17px;
  background-color: var(--main-color);
  color: black;
`;

const SkillItem = ({ item }) => {
  return (
    <Box>
      <ImageHolder>
        <Image url={item && item.img} />
      </ImageHolder>

      <Title>{item && item.name}</Title>
    </Box>
  );
};

export default SkillItem;
