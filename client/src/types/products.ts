export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  model: string;
  thumbnail: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse {
  success: number;
  message?: string;
  data?: Product | Product[];
}
