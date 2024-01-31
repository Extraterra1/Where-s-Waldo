import Header from '../components/Header';
import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from '@iconify/react';

import baldiesImg from '../assets/baldies.png';
import beardieImg from '../assets/beardie.png';
import unibrowImg from '../assets/unibrow.png';
import squidwardImg from '../assets/squidward.png';

const positions = {
  beard: {
    x: 0.5320487613055447,
    y: 0.4838709677419355
  },
  squidward: {
    x: 0.7664176169878096,
    y: 0.7513904338153504
  },
  unibrow: {
    x: 0.28784899724734564,
    y: 0.5280867630700778
  }
};

const Landing = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [lastClick, setLastClick] = useState(null);

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = e.target;

    const normalizedX = x / width;
    const normalizedY = y / height;

    console.log(`Clicked x: ${normalizedX} / y: ${normalizedY}`);

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
        <GameHeader>
          <h1>The Usual Suspects</h1>
          <div className="characters">
            <div className="item">
              <img src={beardieImg} />
              <h4>Beardie</h4>
            </div>
            <div className="item">
              <img src={unibrowImg} />
              <h4>Uni</h4>
            </div>
            <div className="item">
              <img src={squidwardImg} />
              <h4>Squidward</h4>
            </div>
          </div>
        </GameHeader>
        <Image $lastClick={lastClick}>
          <img onClick={handleClick} src={baldiesImg} onMouseMove={updateCoords} />
          <Icon icon="ph:circle-dashed-bold" color="var(--danger)" />
        </Image>
      </StyledMain>
    </>
  );
};

export default Landing;

const GameHeader = styled.div`
  text-align: center;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  font-family: 'Playfair Display';

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }

  & > h1 {
    font-size: 3rem;
    color: var(--light);
    text-align: center;
  }

  & > .characters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    place-items: center;
    gap: 3rem;

    & > .item {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.5rem;
      font-family: 'Sixtyfour';
      color: var(--light);

      @media (max-width: 450px) {
        font-size: 1rem;
      }

      & > img {
        border-radius: 0.5rem;
        max-height: 10rem;
        max-width: 10rem;
        margin: 0 auto;

        object-fit: cover;

        @media (max-width: 450px) {
          max-height: 10rem;
        }
      }
    }
  }
`;

const Coords = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  @media (max-width: 450px) {
    display: none;
  }

  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--gray);
  font-size: 1.5rem;
`;

const StyledMain = styled.main`
  background-color: var(--dark-hover);
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: crosshair;

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
    visibility: ${(props) => (!props.$lastClick ? 'hidden' : 'inherit')};
  }
`;
