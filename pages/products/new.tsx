import Button from '@components/common/button';
import withAuth from '@components/hoc/withAuth';
import { addNewProduct } from '@services/firebase';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TProduct } from 'types/products';
import { uploadImage } from 'utils/uploader';
import tw, { styled } from 'twin.macro';
import { DEFAULT_PRODUCT, PRODUCTS_FILTER } from 'constants/constant';
import defaultImage from '/public/images/background6.jpg';

const NewProduct = () => {
  const [product, setProduct] = useState<TProduct>(DEFAULT_PRODUCT);
  const [file, setFile] = useState<File>();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && name === 'file') {
      const { files } = e.target;
      files && setFile(files[0]);
      return;
    }

    if (name === 'category') {
      console.log(name, value);
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsUploading(true);

    if (file) {
      uploadImage(file) //
        .then((url) => {
          addNewProduct(product, url).then(() => {
            setSuccess('Registered');

            setTimeout(() => {
              setSuccess(null);
            }, 4000);
          });
          setProduct(DEFAULT_PRODUCT);
        })
        .finally(() => setIsUploading(false));
    }
  };

  return (
    <section>
      {success && (
        <div tw="relative">
          <p tw="py-4 px-4 font-bold bg-primary2 text-primary7 w-fit rounded-lg mb-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[100%]">
            🌷 {success}
          </p>
        </div>
      )}

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
  );
};

export default withAuth(NewProduct, true);

const Form = styled.form`
  input,
  select {
    ${tw`py-2 px-4 border-[1px] border-solid border-primary2 rounded-md`}
  }
`;
