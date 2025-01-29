import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 24px;
  border-radius: 4px;
  background: #141430;
  box-shadow: '0px 4px 10px rgba(0, 0, 0, 0.04)';
  animation: ${scaleIn} 0.3s;

  .modal-body {
    margin-top: 2rem;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16px;
    color: #f2f2f2;
    margin-right: 24px;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;

export const CloseBtn = styled.span`
  border: none;
  background: #fefefe;
  max-width: 20px;
  max-height: 20px;
  color: #121214;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;
