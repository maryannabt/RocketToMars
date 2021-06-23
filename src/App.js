import React from "react";
import styled from "styled-components";

import BgImg from "./assets/background.svg";
import CountdownTimer from "./components/CountdownTimer";
import Message from "./components/Message";
import Rocket from "./components/Rocket"

const App = () => {
  return (
    <Wrapper>
      <Container>
        <Rocket />
        <Message />
        <TimersContainer>
          <CountdownTimer id={0} timer={{ minutes: 5, seconds: 0 }}/>
          <CountdownTimer id={1} timer={{ minutes: 3, seconds: 0 }}/>
          <CountdownTimer id={2} timer={{ minutes: 1, seconds: 0 }}/>
        </TimersContainer>
      </Container>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url('${BgImg}') no-repeat center center fixed;
  background-size: cover;
`;

const Container = styled.div`
  max-width: 55rem;
  margin: 0 auto;
  padding: 2rem 0;

  > * + * {
  margin-top: 1.5rem;
}
`;

const TimersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;

    > * + * {
      margin: 2.5rem 0 0 0;
    }
  }
`;