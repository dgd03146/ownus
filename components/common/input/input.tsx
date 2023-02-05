import React, { forwardRef } from 'react';
import tw from 'twin.macro';

// export type InputType = 'text' | 'email' | 'password';

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  style?: string;
  // className?: string;
  placeholder?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      name,
      label,
      type,
      // className = '',
      placeholder,
      style = '',
      ...props
    },
    ref
  ) => {
    return (
      <input
        id={id}
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        css={[tw`${style}`]}
        {...props}
      />
    );
  }
);
