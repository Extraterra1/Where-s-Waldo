import Header from '../components/Header';
import styled from 'styled-components';
import { useState } from 'react';

import baldiesImg from '../assets/baldies.png';

const Landing = () => {
  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = e.target;

    const normalizedX = x / width;
    const normalizedY = y / height;

    console.log(`(${normalizedX}, ${normalizedY})`);
  };

  const updateCoords = (e) => {};

  return (
    <>
      <Coords>
        <h3>Current Position:</h3>
        <span>X: </span>
        <span>Y: </span>
      </Coords>
      <Header />
      <StyledMain>
        <Title>
          <h1>Find them!</h1>
        </Title>
        <Image>
          <img onClick={handleClick} src={baldiesImg} onMouseMove={updateCoords} />
        </Image>
      </StyledMain>
    </>
  );
};

export default Landing;

const Coords = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--gray);
  font-size: 1.5rem;
`;

const StyledMain = styled.main`
  background-color: var(--dark-hover);
`;

const Title = styled.div`
  text-align: center;
  padding: 2rem;

  & > h1 {
    font-size: 3rem;
    color: var(--light);
  }
`;

const Image = styled.div`
  height: 100%;
  width: 100%;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
