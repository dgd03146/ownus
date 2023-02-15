import tw from 'twin.macro';
import styled from '@emotion/styled';

export const Form = styled.form`
  ${tw`flex flex-col mt-20 py-10 mobile:w-96`},
  input {
    border: solid 1px #ececec;
    outline: none;
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-bottom: 4rem;
  }
`;

// FIXME: type 폴더에 지정?
interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
}

export const Button = styled.button<ButtonProps>`
  ${tw`bg-primary3 my-2 text-white1 text-lg py-2 mt-6 hover:bg-primary2`}
`;
