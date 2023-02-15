import tw, { css } from 'twin.macro';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import background from '/public/images/background3.jpg';
import Link from 'next/link';
import Header from '@components/common/auth/header';
import { FormInput } from '@components/common/input/formInput';
import { EmailInput, PasswordInput } from '@lib/constants/auth';
import { useLogin } from 'queries/hooks/auth/useLogin';
import WithAuth from '@components/hoc/withAuth';
import { TLogin } from 'types/user';
import { Button, Form } from './styles';
// TODO: 폴더 절대경로 설정하기

// TODO: 이미지 등 겹치는 컴포넌트 공통으로 만들기?

const Login = () => {
  const onLogin = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<TLogin>();

  const onSubmit = async (formData: TLogin) => {
    await new Promise((r) => setTimeout(r, 1000)); // 버튼 중복으로 누르는거 방지
    const { email, password } = formData;
    onLogin({ email, password });
  };

  return (
    <div tw="flex">
      <div tw="flex mobile:flex-col mobile:items-center desktop:items-end desktop:w-1/2 h-screen w-full mobile:px-28">
        <div tw="w-full px-10 mobile:px-0 mobile:w-auto">
          <Header />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h2>이메일로 로그인</h2>
            <FormInput<TLogin>
              id={EmailInput.id}
              type={EmailInput.type}
              name={'email'}
              label={EmailInput.label}
              placeholder={EmailInput.placeholder}
              register={register}
              rules={EmailInput.rules}
              errors={errors}
            />
            <FormInput<TLogin>
              id={PasswordInput.id}
              type={PasswordInput.type}
              name={'password'}
              label={PasswordInput.label}
              placeholder={PasswordInput.placeholder}
              register={register}
              rules={PasswordInput.rules}
              errors={errors}
            />
            <Button type="submit" disabled={isSubmitting}>
              로그인
            </Button>
            <div>
              <p tw="text-sm mt-10 mb-2">아직 계정이 없으신가요?</p>
              <p tw="text-blue underline">
                <Link href={'auth/signup'}>회원가입</Link>
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

export default WithAuth(Login);
