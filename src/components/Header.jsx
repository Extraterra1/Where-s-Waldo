import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderContainer = styled.nav`
  display: flex;
  padding: 2rem 8rem;
  justify-content: space-between;
  background-color: var(--dark);
  font-size: 2rem;
  align-items: center;
  font-family: 'Oswald';
  color: var(--light);

  & .title {
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Sixtyfour';
  }
  & > *:hover {
    color: var(--dark-hover);
  }

  & > .timer {
    padding: 2rem;
    background-color: var(--light);
    border-radius: 0.5rem;
    color: var(--dark);
    font-family: 'Calibri';
    & > .stopwatch {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  @media (max-width: 450px) {
    padding: 2rem 3rem;

    .timer {
      font-size: 2rem;
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
`;

const Header = ({ minutes, seconds }) => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="title">Where's Baldo</div>
        </Link>
        <span className="timer">
          Your time:{' '}
          <span className="stopwatch">
            {minutes}:{seconds.toString().padStart(2, '0')}
          </span>
        </span>
      </HeaderContainer>
    </>
  );
};

Header.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number
};

export default Header;
