import { useEffect } from 'react';
import { DispatchType, GlobalState } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductsByCategory } from '../redux/actions';
import Loading from './Loading';

export default function CategoriesList() {
  const { categories } = useSelector((globalState: GlobalState) => globalState.productsList);
  const { isLoading } = useSelector((globalState: GlobalState) => globalState.productsList);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
  }, []); 

  const handleChange = async (id: string) => {
    dispatch(fetchProductsByCategory(id));
  };

  if (isLoading) return <Loading />;

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
