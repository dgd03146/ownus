import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import tw, { css } from 'twin.macro';
import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
  FieldValues
} from 'react-hook-form';
import { Input, InputProps } from './input';

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

export const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  style,
  ...props
}: FormInputProps<TFormValues>) => {
  const error = errors ? errors[name] : null;

  return (
    <div tw="flex flex-col">
      <label htmlFor={props.id}>{props.label}</label>
      <Input name={name} {...props} {...(register && register(name, rules))} />
      <p css={[tw`text-sm mb-4`, { color: 'red' }]}>{error?.message}</p>
    </div>
  );
};
