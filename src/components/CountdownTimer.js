import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useInterval from "../hooks/useInterval";
import useLocalStorageState from "../hooks/useLocalStorageState";

const CountdownTimer = ({ id, timer }) => {
  const [interval, setInterval] = useState(1000);
  const [countdownTime, setCountdownTime] = useState(0);
  const [timerData, setTimerData] = useState({ minutes: timer.minutes, seconds: timer.seconds });
  const [timeLeft, setTimeLeft] = useLocalStorageState(`remainingTime-${id}`, { minutes: timer.minutes, seconds: timer.seconds });

  const calculateTimeLeft = () => {
    const currDate = new Date().getTime();
    const difference = countdownTime - currDate;

    let timeDiff = {
      minutes: (difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0),
      seconds: (difference > 0 ? Math.floor((difference / 1000) % 60) : 0)
    };

    timeDiff.minutes =
      timeDiff.minutes < 10 ? `0${timeDiff.minutes}` : `${timeDiff.minutes}`;
    timeDiff.seconds =
      timeDiff.seconds < 10 ? `0${timeDiff.seconds}` : `${timeDiff.seconds}`;

    if (difference < 0) {
      // Stop Timer
      setInterval();
      alert("You missed the last rocket to mars!");
    } else {
      // Update Timer
      setTimeLeft(timeDiff);
    }
  };

  const resetTimer = () => {
    localStorage.removeItem(`remainingTime-${id}`);
    setTimerData({ minutes: timer.minutes, seconds: timer.seconds });
    setInterval(1000);
  };

  useEffect(() => {
    let expectedTime = new Date().getTime();
    let minutes = timerData.minutes; 
    let seconds = timerData.seconds;
    let storedTime = JSON.parse(localStorage.getItem(`remainingTime-${id}`));

    if(storedTime && storedTime.minutes && storedTime.seconds && (storedTime.minutes > 0 || storedTime.seconds > 0)) {
        storedTime.minutes = +storedTime.minutes;
        storedTime.seconds = +storedTime.seconds;
        minutes = storedTime.minutes;
        seconds = storedTime.seconds;
    }

    expectedTime += minutes > 0 ? minutes * 60000 : 0;
    expectedTime += seconds > 0 ? seconds * 1000 : 0;
    setCountdownTime(expectedTime);
  }, [timerData, id]);

  useInterval(calculateTimeLeft, interval, countdownTime);

  return (
    <Wrapper>
      <Title>Countdown to lift off</Title>
      <Clock>
        <Digit>{timeLeft.minutes}</Digit>
        <Colon>:</Colon>
        <Digit>{timeLeft.seconds}</Digit>
      </Clock>
      <Button onClick={resetTimer}>Reset timer</Button>
    </Wrapper>
  );
};

export default CountdownTimer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * + * {
      margin: 1.5rem 0 0 0;
  }
`;

const Title = styled.div`
  font-size: 1.7rem;
  color: white;
`;

const Clock = styled.div`
  color: white;
  display: flex;
  font-size: 3rem;
`;

const Digit = styled.div`
  background-color: rgba(76, 88, 129, 0.75);
  border-radius: 2rem;
  padding: 1rem 0.8rem;
`;

const Colon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.6rem;
`;

const Button = styled.button`
  background-color: #ee1b24;
  color: white;
  font-family: "Pattaya", sans-serif;
  border: none;
  border-radius: 1rem;
  font-size: 1.7rem;
  padding: 0.4rem 4.5rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: rgb(161, 5, 5);
  }
`;
