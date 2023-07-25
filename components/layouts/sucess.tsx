import React from 'react';
import {} from 'twin.macro';

const Success = ({ success }: { success: string }) => {
  return (
    <div tw="relative">
      <p tw="py-4 px-4 font-bold bg-primary2 text-primary7 w-fit rounded-lg mb-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[100%]">
        🌷 {success}
      </p>
    </div>
  );
};

export default Success;
