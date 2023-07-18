import Button from '@components/common/button';
import withAuth from '@components/hoc/withAuth';
import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { uploadImage } from 'utils/uploader';

type TProduct = {
  title?: string;
  category?: string;
  price?: number;
  description?: string;
  options?: string;
};

const NewProduct = () => {
  const [product, setProduct] = useState<TProduct>();
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      files && setFile(files[0]);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    file &&
      uploadImage(file).then((url) => {
        console.log(url);
      });
  };
  return (
    <section>
      {file && <Image src={URL.createObjectURL(file)} alt="local file" width={500} height={500} />}
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" name="file" required onChange={handleChange} />
        <input
          type="text"
          name="title"
          value={product?.title ?? ''}
          placeholder="Product Name"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product?.price ?? ''}
          placeholder="Price"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product?.category ?? ''}
          placeholder="Category"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product?.description ?? ''}
          placeholder="Prouduct Description"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product?.options ?? ''}
          placeholder="Options (,)"
          required
          onChange={handleChange}
        />
        <Button text={'Create Product'} />
      </form>
    </section>
  );
};

export default withAuth(NewProduct, true);
