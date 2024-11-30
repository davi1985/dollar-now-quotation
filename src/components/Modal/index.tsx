import { ReactNode } from 'react';

import { ReactPortal } from '../ReactPortal';

import { Container, Overlay } from './styles';

type ModalProps = {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ visibility, children }: ModalProps) =>
  visibility ? (
    <ReactPortal containerId={'modal-root'}>
      <Overlay>
        <Container>
          <div className="modal-body">{children}</div>
        </Container>
      </Overlay>
    </ReactPortal>
  ) : null;
