import React from "react";
import styled from "styled-components";

import hero from "../assets/hero.png";

const Message = () => {
    return (
      <Wrapper>
        <MessageText>
            <Title>Get your seat to Mars!</Title>
            <Text>Earth is doomed, but don't worry! The last rocket is leaving for mars soon, so hurry up and book your flight!</Text>
        </MessageText>
        <ImgContainer>
            <Img src={hero} alt='hero'/>
        </ImgContainer>
      </Wrapper>
    );
  };
  
export default Message;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MessageText = styled.div`
  max-width: 31rem;

  @media only screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 95%;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.2rem;
  font-weight: 500;
  color: #96c5fd;

  @media only screen and (max-width: 950px) {
    font-size: 3rem;
    font-weight: 400;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.9rem;
  color: white;
  margin: 0.5rem 0 0 0;

  @media only screen and (max-width: 950px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const ImgContainer = styled.div`
    @media only screen and (max-width: 950px) {
      margin-top: 2.5rem;
      display: flex;
      justify-content: center;
    }
`;

const Img = styled.img`
    width: 17rem;

    @media only screen and (max-width: 950px) {
        width: 21rem;
    }
`;