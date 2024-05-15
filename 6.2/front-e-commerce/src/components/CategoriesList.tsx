import { useEffect, useState } from 'react';
import { fetchURL } from '../services/fetchURL';
import { Category } from '../types';
import { useDispatch } from 'react-redux';
import { changeProducts } from '../redux/actions';

export default function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchURL('https://api.mercadolibre.com/sites/MLB/categories')
      .then((data) => setCategories(data));
  }, []);

  const handleChange = async (id: string) => {
    fetchURL(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`)
      .then(({ results }) => dispatch(changeProducts(results)));
  };

  return (
    <aside className="aside-container">
      { categories.map((category) => (
        <div key={category.id}>
          <label htmlFor={category.id}>
            <input
              type="radio"
              name="category"
              id={category.id}
              onChange={ () => { handleChange (category.id)} }
            />
            {category.name}
          </label>
        </div>
      )) }
    </aside>
  )
}
