import React from "react";
import SkillItem from "./skill-item";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Box = styled.div`
  margin-bottom: 20px;
`;

const CategoryName = styled.h3`
  line-height: 1.5em;
  font-size: 1.5em;
  text-transform: capitalize;
`;

const Grid = styled.ul`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  margin-top: 30px;
  height: 140px;
`;

const SkillList = ({ skills }) => {
  return (
    <Container>
      {skills &&
        skills.map((skill, idx) => (
          <Box key={idx}>
            <CategoryName>{skill.category}</CategoryName>
            <Grid>
              {skill.items.map((item, idx) => (
                <SkillItem key={idx} item={item} />
              ))}
            </Grid>
          </Box>
        ))}
    </Container>
  );
};

export default SkillList;
