import { ReactNode } from 'react';

import { ReactPortal } from '../ReactPortal';

import { CloseBtn, Container, Overlay } from './styles';

type ModalProps = {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ visibility, children, onClose }: ModalProps) =>
  visibility ? (
    <ReactPortal containerId={'modal-root'}>
      <Overlay>
        <Container>
          <div className="modal-body">
            <CloseBtn onClick={onClose}>X</CloseBtn>
            {children}
          </div>
        </Container>
      </Overlay>
    </ReactPortal>
  ) : null;
