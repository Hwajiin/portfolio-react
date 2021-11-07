import React from "react";
import styled from "styled-components";
import AvatarMesh from "../canvas/avatar";
import CanvasCompo from "../canvas/canvas";
import Page from "../templates/page";

const Container = styled.div`
  width: 100%;
`;

const Avatar = styled.div`
  width: 30%;
  height: 300px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  overflow: hidden;
`;

const AboutMe = () => {
  return (
    <Page title="About Me">
      <Container>
        <Avatar>
          <CanvasCompo>
            <AvatarMesh></AvatarMesh>
          </CanvasCompo>
        </Avatar>
      </Container>
    </Page>
  );
};

export default AboutMe;
