import React from 'react';
import {} from 'twin.macro';

type TProps = {
  text: string;
  price: number;
};

const PriceCard = ({ text, price }: TProps) => {
  return (
    <div tw="bg-primary1 p-8 mx-2 rounded-2xl text-center text-lg tablet:text-xl">
      <p>{text}</p>
      <p tw="font-bold text-primary3 text-xl tablet:text-2xl">£{price}</p>
    </div>
  );
};

export default PriceCard;
