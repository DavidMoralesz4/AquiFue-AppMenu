import { Product } from '@/types/product';

export const products: Product[] = [
  // Hamburguesas
  {
    id: '1',
    name: 'Hamburguesa Clásica',
    description: 'Carne de res jugosa, lechuga, tomate, cebolla y nuestra salsa especial en pan tostado',
    price: 8.99,
    image: '/hamburguesa-clasica.jpg',
    category: 'hamburguesas',
    isPopular: true
  },
  {
    id: '2',
    name: 'Hamburguesa Doble Queso',
    description: 'Doble carne, doble queso cheddar, lechuga, tomate y salsa BBQ',
    price: 12.99,
    image: '/hamburguesa-doble-queso.jpg',
    category: 'hamburguesas',
    isPopular: true
  },
  {
    id: '3',
    name: 'Hamburguesa Vegetariana',
    description: 'Medallón de quinoa y vegetales, lechuga, tomate, aguacate y salsa vegana',
    price: 9.99,
    image: '/hamburguesa-vegetariana.jpg',
    category: 'hamburguesas',
    isVegetarian: true
  },
  {
    id: '4',
    name: 'Hamburguesa BBQ',
    description: 'Carne de res con salsa BBQ, cebolla caramelizada, queso y tocino crujiente',
    price: 11.99,
    image: '/hamburguesa-bbq.jpg',
    category: 'hamburguesas'
  },

  // Bebidas
  {
    id: '5',
    name: 'Coca Cola',
    description: 'Refresco de cola clásico, frío y refrescante',
    price: 2.99,
    image: '/coca-cola.jpg',
    category: 'bebidas'
  },
  {
    id: '6',
    name: 'Jugo de Naranja',
    description: 'Jugo natural de naranja recién exprimido',
    price: 3.99,
    image: '/jugo-naranja.jpg',
    category: 'bebidas',
    isVegetarian: true
  },
  {
    id: '7',
    name: 'Milkshake de Vainilla',
    description: 'Batido cremoso de vainilla con topping de crema batida',
    price: 4.99,
    image: '/milkshake-vainilla.jpg',
    category: 'bebidas'
  },

  // Acompañamientos
  {
    id: '8',
    name: 'Papas Fritas',
    description: 'Papas doradas y crujientes, perfectamente sazonadas',
    price: 3.99,
    image: '/papas-fritas.jpg',
    category: 'acompañamientos',
    isVegetarian: true
  },
  {
    id: '9',
    name: 'Aros de Cebolla',
    description: 'Aros de cebolla empanizados y fritos hasta dorar',
    price: 4.99,
    image: '/aros-cebolla.jpg',
    category: 'acompañamientos',
    isVegetarian: true
  },
  {
    id: '10',
    name: 'Nuggets de Pollo',
    description: 'Trozos de pollo empanizados, crujientes por fuera y jugosos por dentro',
    price: 5.99,
    image: '/nuggets-pollo.jpg',
    category: 'acompañamientos'
  },

  // Postres
  {
    id: '11',
    name: 'Helado de Chocolate',
    description: 'Helado cremoso de chocolate con topping de chocolate derretido',
    price: 3.99,
    image: '/helado-chocolate.jpg',
    category: 'postres',
    isVegetarian: true
  },
  {
    id: '12',
    name: 'Brownie con Helado',
    description: 'Brownie caliente de chocolate con helado de vainilla y salsa de caramelo',
    price: 5.99,
    image: '/brownie-helado.jpg',
    category: 'postres',
    isPopular: true,
    isVegetarian: true
  }
];

