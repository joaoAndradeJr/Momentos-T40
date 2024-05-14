import { useEffect, useState } from 'react';
import { fecthURL } from '../services/fetchURL';
import { Category } from '../types';

export default function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fecthURL('https://api.mercadolibre.com/sites/MLB/categories')
      .then((data) => setCategories(data));
  }, []);

  return (
    <aside className="aside-container">
      { categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      )) }
    </aside>
  )
}
