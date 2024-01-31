import styled from 'styled-components';
import PropTypes from 'prop-types';

const Leaderboard = ({ user, time, resetGame, setUser }) => {
  const handleReset = () => {
    setUser(null);
    resetGame();
  };
  return (
    <>
      <Container>
        <Row>
          <span>Username</span>
          <span>Time</span>
        </Row>
        <Row>
          <span>{user}</span>
          <span>{time}</span>
        </Row>
      </Container>
      <ResetBtn onClick={handleReset}>Play Again</ResetBtn>
    </>
  );
};

Leaderboard.propTypes = {
  user: PropTypes.string,
  time: PropTypes.string,
  resetGame: PropTypes.func,
  setUser: PropTypes.func
};

export default Leaderboard;

const Container = styled.div`
  font-size: 5rem;
  padding: 4rem;
  border: 1px dashed var(--dark);
  gap: 2rem;
  text-align: center;

  & > div:first-of-type {
    border-bottom: 4px dashed var(--dark);
    margin-bottom: 3rem;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > span {
    padding: 1rem;
  }
`;

const ResetBtn = styled.button`
  font-size: 2rem;
  background-color: var(--success);
  border: 1px solid var(--light);
`;
