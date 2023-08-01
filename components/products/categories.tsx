import { PRODUCTS_FILTER } from 'constants/constant';

import tw from 'twin.macro';

type TProps = {
  selected: string;
  handleCategory: (category: string) => void;
};

const Categories = ({ handleCategory, selected }: TProps) => {
  return (
    <ul tw="flex justify-center mb-6 tablet:mb-12 gap-x-4 mobile:gap-x-8 mobile:px-[50px] text-[13px] text-primary3 font-semibold text-opacity-60">
      {PRODUCTS_FILTER.map((it) => (
        <li className="group" tw="relative cursor-pointer" key={it.title}>
          <p onClick={() => handleCategory(it.title)}>{it.title}</p>
          <div
            tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-90 transition-transform duration-500"
            css={[selected === it.title && tw`scale-x-100 transition-transform duration-500`]}
          />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
