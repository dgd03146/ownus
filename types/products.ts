export type TProduct = {
  product_id: string;
  p_name: string;
  p_price: number;
  p_info: string;
  thunbnail_url: string;
  created_at: string;
  is_sold: boolean;
  p_images?: string[];
};

export type TProducts = {
  products: TProduct[];
};

//  product_id, p_name, p_price, thunbnail_url

// p_info,  created_at,is_sold
