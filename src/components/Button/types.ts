import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  text: string;
  onClick: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;
