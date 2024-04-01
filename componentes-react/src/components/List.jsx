import { produtos, produtosNovos } from '../utils';

function List() {
  return (
    <ul>
      {
        produtosNovos.map(({ nome, preco }, index) => (
          <li key={ index }>
            <p>{`Produto: ${nome} - Valor: R$ ${preco}`}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default List;
