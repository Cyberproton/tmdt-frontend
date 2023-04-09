import { Product } from 'data';

export interface ProductProps {
  product: Product;
}

export interface ProductMainSectionProps extends ProductProps {}

export interface ProductDetailBreadcrumbsProps extends ProductProps {}

export interface ProductDescriptionSectionProps extends ProductProps {}
