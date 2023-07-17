import React from 'react';
import {} from 'twin.macro';

type TProps = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ text, onClick }: TProps) => {
  return (
    <button tw="bg-primary2 py-2 px-4 text-primary7 rounded-md hover:brightness-110" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
