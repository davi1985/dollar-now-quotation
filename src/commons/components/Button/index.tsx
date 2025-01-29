import { ButtonProps } from './types';

export const Button = ({ text, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      marginTop: 'auto',
      cursor: 'pointer',
      maxWidth: '200px',
      borderRadius: 100000,
      padding: 10,
      marginLeft: 'auto',
      background: '#141430',
      border: '1px solid #fefefe',
    }}
  >
    {text}
  </button>
);
