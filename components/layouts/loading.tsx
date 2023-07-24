import { Circles } from 'react-loader-spinner';

import React from 'react';
import {} from 'twin.macro';

const Loading = () => {
  return (
    <div tw="flex justify-center items-center">
      <Circles
        height="80"
        width="80"
        color="#ffc2d1"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
