import tw, { css } from 'twin.macro';
import SignHeader from '@components/sign/signHeader';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import background from '/public/images/background3.jpg';
import Link from 'next/link';

//  FIXME: 공통 컴포넌트로 SIGNIN, SIGNUP 만들기?

interface IFormInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting }
  } = useForm<IFormInputs>();

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  };

  return (
    <div css={[tw`flex`]}>
      <div css={[tw`flex flex-col items-end w-1/2 h-screen px-28`]}>
        <div>
          <SignHeader />
          <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
            <h2>이메일로 로그인</h2>
            <label htmlFor="email">이메일 주소</label>
            <input
              id="email"
              type="email"
              placeholder="이메일 주소를 입력해주세요"
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '이메일 형식에 맞지 않습니다.'
                }
              })}
            />
            {errors.email && (
              <p css={[tw`text-sm mb-4`, { color: 'red' }]}>
                {errors.email.message}
              </p>
            )}
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 8,
                  message: '8자리 이상 비밀번호를 사용하세요.'
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                  message: '영문, 숫자를 혼용하여 입력하세요.'
                },
                maxLength: {
                  value: 16,
                  message: '16자 이하의 비밀번호를 사용하세요.'
                }
              })}
            />
            <p css={[tw`text-sm`, { color: 'red' }]}>
              {errors.password?.message}
            </p>
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
              disabled={isSubmitting}
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
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h2 {
    margin-bottom: 4rem;
  }
`;
