import tw, { css } from 'twin.macro';
import Header from '@components/common/auth/header';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import background from '/public/images/background4.jpg';
import Link from 'next/link';
import { FormInput } from '@components/common/input/formInput';
import WithAuth from '@components/hoc/withAuth';
import { TSignup } from 'types/user';
import {
  EmailInput,
  PasswordInput,
  UsernameInput,
  PasswordConfirmInput
} from '@lib/constants/auth';
import { useSignup } from 'queries/hooks/auth/useSignup';
import { Button, Form } from './styles';
const SignUp = () => {
  const onSignup = useSignup();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<TSignup>();

  const passwordConfirmRules = {
    ...PasswordConfirmInput.rules,
    validate: {
      matchPassword: (value: string) => {
        const { password } = getValues();
        return password === value || '비밀번호가 일치하지 않습니다.';
      }
    }
  };

  const onSubmit = async (formData: TSignup) => {
    await new Promise((r) => setTimeout(r, 1000));
    const { username, email, password } = formData;
    onSignup({ username, email, password });
    alert(JSON.stringify(formData));
  };

  return (
    <div tw="flex">
      <div tw="flex mobile:flex-col mobile:items-center desktop:items-end desktop:w-1/2 h-screen w-full mobile:px-28">
        <div tw="w-full px-10 mobile:px-0 mobile:w-auto">
          <Header />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>이메일로 가입하기</h2>
            <FormInput<TSignup>
              id={UsernameInput.id}
              type={UsernameInput.type}
              name={'username'}
              label={UsernameInput.label}
              placeholder={UsernameInput.placeholder}
              register={register}
              rules={UsernameInput.rules}
              errors={errors}
            />
            <FormInput<TSignup>
              id={EmailInput.id}
              type={EmailInput.type}
              name={'email'}
              label={EmailInput.label}
              placeholder={EmailInput.placeholder}
              register={register}
              rules={EmailInput.rules}
              errors={errors}
            />
            <FormInput<TSignup>
              id={PasswordInput.id}
              type={PasswordInput.type}
              name={'password'}
              label={PasswordInput.label}
              placeholder={PasswordInput.placeholder}
              register={register}
              rules={PasswordInput.rules}
              errors={errors}
            />
            <FormInput<TSignup>
              id={PasswordConfirmInput.id}
              type={PasswordConfirmInput.type}
              name={'passwordConfirm'}
              label={PasswordConfirmInput.label}
              placeholder={PasswordConfirmInput.placeholder}
              register={register}
              rules={passwordConfirmRules}
              errors={errors}
            />
            <Button type="submit" disabled={isSubmitting}>
              가입하기
            </Button>
            <div>
              <p tw="text-sm mt-10 mb-2">이미 계정이 있으신가요?</p>
              <p tw="text-blue underline">
                <Link href={'auth/login'}>로그인</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
      <div tw="w-1/2 h-screen relative hidden desktop:block">
        <Image
          src={background}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WithAuth(SignUp);
