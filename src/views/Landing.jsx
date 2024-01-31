import Header from '../components/Header';
import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '@iconify/react';

import baldiesImg from '../assets/baldies.png';

const Landing = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [lastClick, setLastClick] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = e.target;

    const normalizedX = x / width;
    const normalizedY = y / height;

    setLastClick({ x: normalizedX, y: normalizedY });
  };

  const updateCoords = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = e.target;

    const normalizedX = x / width;
    const normalizedY = y / height;

    setCoords({ x: normalizedX, y: normalizedY });
  };

  return (
    <>
      <Coords>
        <h3>Current Position:</h3>
        <span>X: {coords.x}</span>
        <span>Y: {coords.y}</span>
      </Coords>
      <Header />
      <StyledMain>
        <Title>
          <h1>Find them!</h1>
        </Title>
        <Image $lastClick={lastClick}>
          <img onClick={handleClick} src={baldiesImg} onMouseMove={updateCoords} />
          <Icon icon="ph:circle-dashed-bold" color="var(--danger)" />
        </Image>
      </StyledMain>
    </>
  );
};

export default Landing;

const Coords = styled.div`
  position: fixed;
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
  position: relative;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
  }

  & > svg {
    position: absolute;
    height: 5rem;
    width: 5rem;
    top: calc(${(props) => (props.$lastClick ? props.$lastClick.y * 100 : 0)}% - 2.5rem);
    left: calc(${(props) => (props.$lastClick ? props.$lastClick.x * 100 : 0)}% - 2.5rem);
  }
`;
