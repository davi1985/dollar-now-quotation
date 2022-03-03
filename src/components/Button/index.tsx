import { ButtonProps } from './types';

export const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick}>{text}</button>
);
