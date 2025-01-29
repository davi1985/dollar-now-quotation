import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
