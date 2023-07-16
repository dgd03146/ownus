import { User } from 'firebase/auth';
import Image from 'next/image';
import React from 'react';
import {} from 'twin.macro';

type TProps = {
  user: User;
};

const UserInfo = ({ user: { photoURL, displayName } }: TProps) => {
  return (
    <div tw="flex items-center shrink-0">
      <Image src={photoURL!} alt={displayName!} width={30} height={30} tw="rounded-full mr-2" />
      <span tw="hidden desktop:block">{displayName}</span>
    </div>
  );
};

export default UserInfo;
