import styled from 'styled-components';
import Card from './Card';
import theme from '../../theme';

const ModalContent = styled(Card)`
  z-index: auto;
  height: 300px;
  width: 500px;
  background: ${theme.palette.background.modal};
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: React.FC = ({ children }) => (
  <ModalContainer>
    <ModalContent>{children}</ModalContent>
  </ModalContainer>
);

export default Modal;
