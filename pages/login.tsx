import LoginHeader from '@components/layout/loginHeader';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import background from '/public/images/background3.jpg';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  console.log(watch('example')); // watch input value by passing the name of it

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex">
      <div className="flex flex-col items-end w-1/2 h-screen px-28">
        <div>
          <LoginHeader />
          <form
            className="flex flex-col mt-28 py-10 w-96"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mb-16">이메일로 로그인</h2>
            <label className="text-sm mb-2">이메일 주소</label>
            <input
              className="border outline-none px-2 py-3 mb-2 text-sm"
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              {...register('username', {
                minLength: {
                  value: 5,
                  message: 'Username must be longer than 5 characters'
                }
              })}
            />
            <label className="text-sm mb-2">비밀번호</label>
            <input
              className="border outline-none px-2 mb-2 py-3 text-sm"
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
              className=" bg-primary3 my-2 text-white1 text-lg py-2 mt-6"
              type="submit"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 h-screen relative">
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

export default Login;
