import React from "react";
import styled, { keyframes } from "styled-components";

import rocket from "../assets/rocket.png";

const Rocket = () => {
    return (
      <Wrapper>
        <Img src={rocket} alt='rocket'/>
      </Wrapper>
    );
  };
  
export default Rocket;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const wiggle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
`;

const Img = styled.img`
  width: 9rem;
  height: 9rem;
  animation: ${wiggle} infinite 1s linear;

  @media only screen and (max-width: 950px) {
    width: 11rem;
    height: 11rem;
  }
`;