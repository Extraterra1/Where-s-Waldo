import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.nav`
  display: flex;
  padding: 2rem 8rem;
  justify-content: space-between;
  background-color: var(--dark);
  font-size: 2rem;
  align-items: center;
  font-family: 'Oswald';
  & .title {
    font-size: 3rem;
    font-weight: 400;
    font-family: 'Sixtyfour';
    color: var(--light);
  }
  & > *:hover {
    color: var(--dark-hover);
  }
  @media (max-width: 450px) {
    padding: 2rem 3rem;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="title">RESTless Blogging</div>
        </Link>
      </HeaderContainer>
    </>
  );
};

export default Header;
