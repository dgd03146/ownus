import tw, { styled } from 'twin.macro';

type TProps = {
  children: React.ReactNode;
};

export default function Backdrop({ children }: TProps) {
  return (
    <Container>
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
  z-index: 99;
  ${tw`tablet:hidden`}
`;

const Content = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 60vw;
  overflow-y: auto;
`;
