import Header from '../components/Header';
import styled from 'styled-components';

import baldiesImg from '../assets/baldies.png';

const Landing = () => {
  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const { width, height } = e.target;

    const normalizedX = x / width;
    const normalidzedY = y / height;
  };

  return (
    <>
      <Header />
      <StyledMain>
        <Title>
          <h1>Find them!</h1>
        </Title>
        <Image>
          <img onClick={handleClick} src={baldiesImg} />
        </Image>
      </StyledMain>
    </>
  );
};

export default Landing;

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
