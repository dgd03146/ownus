import Button from '@components/common/button';
import withAuth from '@components/hoc/withAuth';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TProduct } from 'types/products';
import { uploadImage } from 'utils/uploader';
import tw, { styled } from 'twin.macro';
import { DEFAULT_PRODUCT, PRODUCTS_FILTER } from 'constants/constant';
import defaultImage from '/public/images/background6.jpg';
import useAddProduct from 'queries/hooks/products/useAddProduct';
import Head from 'next/head';

const NewProduct = () => {
  const [product, setProduct] = useState<TProduct>(DEFAULT_PRODUCT);
  const [file, setFile] = useState<File>();
  const [isUploading, setIsUploading] = useState(false);

  const { addProduct } = useAddProduct();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && name === 'file') {
      const { files } = e.target;
      files && setFile(files[0]);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    if (file) {
      uploadImage(file) //
        .then((url) => {
          addProduct.mutate({ product, url });
          setProduct(DEFAULT_PRODUCT);
        })
        .finally(() => setIsUploading(false));
    }
  };

  return (
    <>
      <Head>
        <title>"Ownus | Register New Product"</title>
        <meta
          name="description"
          content="Register and showcase your new flower products on Ownus. Reach your customers more effectively."
        />
        <meta property="og:title" content="Register New Product | Ownus Flowers" />
        <meta
          property="og:description"
          content="Register and showcase your new flower products on Ownus. Enhance your flower business with us"
        />
      </Head>
      <section>
        <Image
          tw="mx-auto mb-4 min-h-[300px] min-w-[300px] rounded-md"
          src={file ? URL.createObjectURL(file) : defaultImage}
          alt="local file"
          width={300}
          height={300}
        />
        <Form onSubmit={handleSubmit} tw="flex flex-col mx-auto justify-center max-w-[500px] w-auto gap-y-8">
          <input type="file" accept="image/*" name="file" required onChange={handleChange} lang="en" />
          <input
            type="text"
            name="title"
            value={product.title ?? ''}
            placeholder="Product Name"
            required
            onChange={handleChange}
          />
          <select name="category" onChange={handleChange} value={product.category} required>
            {PRODUCTS_FILTER.map(({ id, title }) => (
              <option key={id} value={title}>
                {title}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="price"
            value={product.price ?? ''}
            placeholder="Price"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={product.description ?? ''}
            placeholder="Prouduct Description"
            required
            onChange={handleChange}
          />
          <Button text={isUploading ? 'Uploading...' : 'Register Product'} disabled={isUploading} />
        </Form>
      </section>
    </>
  );
};

export default withAuth(NewProduct, true);

const Form = styled.form`
  input,
  select {
    ${tw`py-2 px-4 border-[1px] border-solid border-primary2 rounded-md`}
  }
`;
