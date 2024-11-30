import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  input,
  button {
    border-radius: 0.25rem;
    padding: 1rem;
    border: none;
    color: var(--text-dark);
    font-size: 1.1rem;
    font-weight: 700;
  }

  input {
    margin-bottom: 10px;
  }

  input::placeholder {
    font-weight: 400;
  }

  button {
    margin-top: 1rem;
    background: var(--green);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
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
