import LoginHeader from '@components/layout/loginHeader';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  console.log(watch('example')); // watch input value by passing the name of it

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex">
      <div className="flex flex-col items-end w-1/2 h-screen bg-primary2 px-40">
        <div>
          <LoginHeader />
          <form
            className="flex flex-col border-2 rounded mt-28 px-5 py-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mb-16">이메일로 로그인</h2>
            <label>이메일 주소</label>
            <input
              className="border-2 rounded outline-none px-20 my-1"
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              {...register('username', {
                minLength: {
                  value: 5,
                  message: 'Username must be longer than 5 characters'
                }
              })}
            />
            <label className="mt-2">비밀번호</label>
            <input
              className="border-2 rounded outline-none px-20 my-1"
              type="text"
              placeholder="비밀번호를 입력해주세요"
              {...register('username', {
                minLength: {
                  value: 5,
                  message: 'Username must be longer than 5 characters'
                }
              })}
            />

            <button className="bg-primary1" type="submit">
              로그인
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-myBlue h-screen">hi</div>
    </div>
  );
};

export default Login;
