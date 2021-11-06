import React from "react";
import SkillItem from "../templates/skill-item";
import Page from "../templates/page";
import styled from "styled-components";
import SkillList from "../templates/skill-list";
import jsLogo from "../static/logo/javascript.png";
import tsLogo from "../static/logo/typescript.png";
import threejsLogo from "../static/logo/threejs.png";
import blenderLogo from "../static/logo/blender.png";
import reactLogo from "../static/logo/react.png";

const Skills = (props) => {
  // skill 목록
  const skillList = [
    {
      category: "Skill List",
      items: [
        { name: "JavaScript", img: jsLogo },
        { name: "Typescript", img: tsLogo },
        { name: "React", img: reactLogo },
        { name: "Three.js", img: threejsLogo },
        { name: "Blender", img: blenderLogo },
      ],
    },
    {
      category: "interest",
      items: [],
    },
  ];

  return (
    <Page title="skills">
      <SkillList skills={skillList} />
    </Page>
  );
};

export default Skills;
