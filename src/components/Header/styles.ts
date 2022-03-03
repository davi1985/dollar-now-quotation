import styled from 'styled-components';

export const Header = styled.header``;

export const Container = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }

  span {
    margin-left: 0.8rem;
    color: var(--green);
  }

  p {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    h1 {
      font-size: 2rem;
    }
  }
`;
