export type Product = {
  product_id: string;
  p_name: string;
  p_price: number;
  p_info: string;
  thunbnail_url: string;
  created_at: string;
  is_sold: boolean;
};

export type Products = {
  products: Product[];
};
