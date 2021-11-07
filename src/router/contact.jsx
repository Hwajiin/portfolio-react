import React from "react";
import styled from "styled-components";
import Page from "../templates/page";
import img from "../static/mobile01.png";

const Container = styled.div`
  width: 70%;
  height: 400px;
  /* font-family: "Press Start 2P", cursive; */
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  border: 1px solid var(--main-color);
  border-radius: var(--main-border-radius);
  margin-bottom: 30px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 5px;
    left: 5px;
    border: 1px solid var(--main-color);
    border-radius: 10px;
    z-index: -1;
  }
`;

const Address = styled.address``;

const Text = styled.p`
  margin-bottom: 10px;
  letter-spacing: 2px;
`;

const Contact = () => {
  const imageURL = "../static/mobile01.png";

  return (
    <Page title="contact">
      <Container>
        <Image url={imageURL} />
        <Address>
          {/* TODO: 주소에 a 링크 생성하기 */}
          <Text>Mobile: 010.6221.5291</Text>
          <Text>E-mail: borderline0px@gmail.com</Text>
          <Text>Github</Text>
        </Address>
      </Container>
    </Page>
  );
};

export default Contact;
