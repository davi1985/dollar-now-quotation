import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  select {
    border-radius: 0.25rem;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1rem;

    option {
      padding: 1rem;
    }
  }

  .separator {
    font-size: 1rem;
    color: #a8a8b3;
    margin: 2rem 0;

    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 1rem;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 1rem;
    }
  }

  input {
    border-radius: 0.25rem;
    padding: 1rem;
    border: none;
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 700;
  }

  input {
    margin-bottom: 10px;
    background: #ddd;
  }

  input::placeholder {
    font-weight: 400;
  }

  span {
    border-radius: 0.25rem;
    padding: 1rem;
    border: none;
    color: var(--text);
    font-size: 2rem;
    font-weight: 700;
    background: var(--red);
    margin-top: 1rem;
    text-align: center;
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonCalc = styled.button`
  margin-top: 1rem;
  background: #33cc95;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  transition: filter 0.3s;
  padding: 1rem;
  border: none;
  border-radius: 100000px;
  width: 100%;
`;

export const ButtonRestart = styled.button`
  margin-top: 1rem;
  background: transparent;
  margin-left: auto;
  padding: 1rem;
  border: none;
  text-decoration: underline;

  &:hover {
    filter: brightness(0.9);
  }
`;
