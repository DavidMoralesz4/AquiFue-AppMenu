export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hamburguesas' | 'bebidas' | 'postres' | 'acompañamientos';
  isPopular?: boolean;
  isVegetarian?: boolean;
}

