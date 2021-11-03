import React from "react";
import SkillItem from "../components/skill-item";
import Page from "../templates/page";
import styled from "styled-components";

const SkillList = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid var(--main-color);
`;

const Skills = (props) => {
  // skill 목록
  const skillList = [
    {
      name: "html/css/javascript",
      img: null,
    },
  ];

  return (
    <Page title="skills">
      <SkillList>
        {skillList.map((skill, idx) => (
          <SkillItem key={idx} skill={skill} />
        ))}
      </SkillList>
    </Page>
  );
};

export default Skills;
