import { Circles } from 'react-loader-spinner';

import React from 'react';

const Loading = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#ffc2d1"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loading;
