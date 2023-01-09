import tw, { css, styled } from 'twin.macro';
import SignHeader from '@layouts/sign/signHeader';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import background from '/public/images/background3.jpg';
import Link from 'next/link';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  console.log(watch('example')); // watch input value by passing the name of it

  const onSubmit = (data: any) => console.log(data);

  //  FIXME: 공통 컴포넌트로 SIGNIN, SIGNUP 만들기?

  return (
    <div css={[tw`flex`]}>
      <div css={[tw`flex flex-col items-end w-1/2 h-screen px-28`]}>
        <div>
          <SignHeader />
          <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <h2>이메일로 로그인</h2>
            <label>이메일 주소</label>
            <input
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              {...register('username', {
                minLength: {
                  value: 5,
                  message: 'Username must be longer than 5 characters'
                }
              })}
            />
            <label>비밀번호</label>
            <input
              type="text"
              placeholder="비밀번호를 입력해주세요"
              {...register('username', {
                minLength: {
                  value: 5,
                  message: 'Username must be longer than 5 characters'
                }
              })}
            />
            <button
              css={[
                tw`bg-primary3 my-2 text-white1 text-lg py-2 mt-6`,
                css`
                  &:hover {
                    background-color: pink;
                  }
                `
              ]}
              type="submit"
            >
              로그인
            </button>
            <div>
              <p css={tw`text-sm mt-10 mb-2`}>아직 계정이 없으신가요?</p>
              <p css={tw`text-blue underline`}>
                <Link href={'/signup'}>회원가입</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div css={tw`w-1/2 h-screen relative`}>
        <Image
          src={background}
          alt="background"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </div>
    </div>
  );
};

export default SignIn;

const formStyle = css`
  ${tw`flex flex-col mt-20 py-10 w-96`},

  input {
    border: solid 1px #ececec;
    outline: none;
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  label {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-bottom: 4rem;
  }
`;
