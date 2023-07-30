import { styled } from 'twin.macro';

type TProps = {
  children: React.ReactNode;
  handleMenuModal: () => void;
};

export default function Backdrop({ children, handleMenuModal }: TProps) {
  return (
    <Container onClick={handleMenuModal}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  /* padding: 1em;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto; */
`;
