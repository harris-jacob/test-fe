import styled from 'styled-components';
import Card from './Card';

interface Props {
  show: boolean;
}

const Modal = styled(Card)<Props>`
  z-index: auto;
  display: ${(p) => (p.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 500px;
`;

export default Modal;
