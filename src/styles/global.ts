import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #141430;
    --text-white: #f2f2f2;
    --text-dark:#231422;
    --red:#e52e4d;
    --green:#33cc95;
    --blue: #5429cc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: var(--text-white)
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; //  14px
    }
  }
`;

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    max-width: 320px;

    padding: 1rem 2rem;
    background: var(--blue);
    font-size: 1.2rem;
    border: none;

    margin-top: 2rem;
    border-radius: 2rem;
    margin-left: auto;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 550px) {
    button {
      max-width: none;
      width: 100%;
    }
  }
`;
