export type ProdutoType = {
  nome: string,
  preco: number,
};

export type ProdutosType = ProdutoType[];

export type ListProductsProps = {
  products: ProdutosType;
};

export type ProductCardProps = ProdutoType;
