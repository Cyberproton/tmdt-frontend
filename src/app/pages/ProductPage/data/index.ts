import ItemBig1Image from '../assets/item-big-1.png';

import Item1Image from '../assets/item-1.png';
import Item2Image from '../assets/item-2.png';
import Item3Image from '../assets/item-3.png';
import Item4Image from '../assets/item-4.png';
import Item5Image from '../assets/item-5.png';
import ItemBig2Image from '../assets/item-big-2.png';
import ItemBig3Image from '../assets/item-big-3.png';
import ItemBig4Image from '../assets/item-big-4.png';

export interface Product {
  name: string;
  price: number;
  description: string;
  discount: number;
  image: string;
}

export const popularProductData: Product[] = [
  {
    name: 'Summer Shirt',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.6,
    image: ItemBig1Image,
  },
  {
    name: 'Blue Pants',
    price: 150000,
    description: 'Product 1 description',
    discount: 0.3,
    image: ItemBig2Image,
  },
  {
    name: 'Golden Coat',
    price: 500000,
    description: 'Product 1 description',
    discount: 0.5,
    image: ItemBig3Image,
  },
  {
    name: 'Snow Hoodie',
    price: 70000,
    description: 'Product 1 description',
    discount: 0.4,
    image: ItemBig4Image,
  },
];

export const discoverProductData = [
  {
    name: 'Summer Shirt',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.6,
    image: Item1Image,
  },
  {
    name: 'Snow Hoodie',
    price: 20000,
    description: 'Product 1 description',
    discount: 0.4,
    image: Item2Image,
  },
  {
    name: 'White Shirt',
    price: 80000,
    description: 'Product 1 description',
    discount: 0.1,
    image: Item3Image,
  },
  {
    name: 'Thunder Hoodie',
    price: 100000,
    description: 'Product 1 description',
    discount: 0,
    image: Item4Image,
  },
  {
    name: 'Crimson Coat',
    price: 100000,
    description: 'Product 1 description',
    discount: 0.3,
    image: Item5Image,
  },
];
