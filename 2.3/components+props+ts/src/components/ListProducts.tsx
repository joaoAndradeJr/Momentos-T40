import { ListProductsProps } from '../../types';
import ProductCard from './ProductCard';

export default function ListProducts({ products }: ListProductsProps) {
  return (
    <>
      {
        products.map(({ nome, preco }, index) => (
          <ProductCard nome={nome} preco={preco} key={`${nome}${preco}${index}`} />
        ))
      }
    </>
  );
}
