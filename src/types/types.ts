export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  quantity?: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}