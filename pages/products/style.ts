import tw, { styled } from 'twin.macro';

export const ImageWrapper = styled.div`
  ${tw`relative w-full mobile:h-[500px] tablet:h-[600px] overflow-hidden cursor-pointer`}

  img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  :hover img {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  ${tw`basis-1/2`} /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    display: none;
    margin: 0;
  }
`;

export const AdditionalInfo = styled.div`
  p {
    ${tw`mb-2`}
  }
`;
