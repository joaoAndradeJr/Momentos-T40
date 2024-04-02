import { ProductCardProps } from '../../types';

export default function ProductCard({ nome, preco }: ProductCardProps) {
  return (
    <div>
      <h4>{ nome }</h4>
      <h5>{ preco }</h5>
      <button onClick={ () => console.log('Clicou em ', nome)}>Comprar</button>
    </div>
  );
}
