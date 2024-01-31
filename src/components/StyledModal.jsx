import Modal from 'react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

import Leaderboard from './Leaderboard';

Modal.setAppElement('#root');

const StyledModal = ({ isOpen, setGameOver, time, resetGame }) => {
  const [user, setUser] = useState(null);

  const handleSubmit = (values, { setSubmitting }) => {
    setUser(values.username);
    setSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={() => setGameOver(false)} style={modalStyles}>
      <ModalContainer>
        {user ? (
          <Leaderboard user={user} time={time} resetGame={resetGame} setUser={setUser} />
        ) : (
          <>
            <h1>You win!</h1>
            <Formik
              initialValues={{
                username: ''
              }}
              validationSchema={Yup.object({
                username: Yup.string().required('Required')
              })}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={handleSubmit}
            >
              <Form>
                <Input id="username" label="Enter your name" name="username" type="text" placeholder="hunter2" />
                <div className="actions">
                  <SubmitBtn type="submit">Submit</SubmitBtn>
                </div>
              </Form>
            </Formik>
          </>
        )}
      </ModalContainer>
    </Modal>
  );
};

StyledModal.propTypes = {
  isOpen: PropTypes.bool,
  setGameOver: PropTypes.func,
  time: PropTypes.string,
  resetGame: PropTypes.func
};

export default StyledModal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  & h1 {
    font-weight: 700;
    font-size: 4rem;
  }
  & .actions {
    margin: 0 auto;

    display: flex;
    justify-content: center;
    gap: 5rem;
  }
`;

const SubmitBtn = styled.button`
  font-size: 2rem;
  background-color: var(--success);
  border: 1px solid var(--light);
`;

const modalStyles = {
  overlay: {
    // opacity: '0.15'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0 !important;
  align-items: center;

  & textarea {
    flex-grow: 1;
    align-self: stretch;
  }
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-family: 'Oswald';
  letter-spacing: 1px;
  gap: 0.5rem;

  & label {
    font-size: 1.7rem;
  }

  & input,
  & textarea {
    background-color: #fff;
    padding: 1rem 2rem;
    border: 1px solid var(--dark);
    border-radius: 0.25rem;
    color: var(--dark);
    font-family: 'Oswald';
    font-weight: 300;
    min-width: 30rem;
    font-size: 2rem;
    resize: none;
  }

  & > .tox {
    border: 1px solid var(--dark);
    border-radius: 0.25rem;
    color: var(--dark);
    overflow: hidden;
  }
`;

const ErrorMessage = styled.div`
  color: var(--danger);
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormGroup>
        <label htmlFor={props.id || props.name}>{label}</label>
        <Wrapper>
          <input {...field} {...props} />
        </Wrapper>
        {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
      </FormGroup>
    </>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};
