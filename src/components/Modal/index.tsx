import { ReactNode } from 'react';

import { CloseBtn, Container, Overlay } from './styles';

type ModalProps = {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ visibility, children, onClose }: ModalProps) =>
  visibility ? (
    <Overlay>
      <Container>
        <div className="modal-body">
          <CloseBtn onClick={onClose}>X</CloseBtn>
          {children}
        </div>
      </Container>
    </Overlay>
  ) : null;
