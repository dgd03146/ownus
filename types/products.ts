export type TProduct = {
  id?: string;
  title: string;
  image: string;
  category: string;
  price: string;
  quantity: number;
  description?: string;
};

export type TProducts = TProduct[];
