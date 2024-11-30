import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ReactPortalProps = {
  containerId: string;
  children: ReactNode;
};

export const ReactPortal = ({ children }: ReactPortalProps) => {
  let container = document.getElementById('modal');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'modal');
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(children, container);
};
