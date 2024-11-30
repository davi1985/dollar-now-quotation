import { ButtonProps } from './types';

export const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick} style={{ marginTop: 'auto', cursor: 'pointer' }}>
    {text}
  </button>
);
