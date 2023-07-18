import { PRODUCTS_FILTER } from 'constants/constant';
import {} from 'twin.macro';

const Categories = () => {
  return (
    <ul tw="flex justify-center mb-12 gap-x-8 px-[50px] text-[13px] text-primary3 font-semibold text-opacity-60">
      {PRODUCTS_FILTER.map((it) => (
        <li className="group" tw="relative cursor-pointer" key={it.title}>
          <p>{it.title}</p>
          <div tw="absolute w-full h-0.5 bg-primary4 scale-x-0 group-hover:scale-x-90 transition-transform duration-500" />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
