import styled from 'styled-components';

export const Card = styled.div``;

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: var(--green);
  color: var(--text-dark);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    margin: 1rem;
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;
    box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  small {
    font-size: 0.8rem;
  }
`;
