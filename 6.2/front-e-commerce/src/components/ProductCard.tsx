interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: Product }) {
  console.log(product);
  return (
    <div>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
    </div>
  );
}
