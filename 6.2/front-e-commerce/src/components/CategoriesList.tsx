import categories from '../utils/categories';

export default function CategoriesList() {
  return (
    <aside className="aside-container">
      { categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      )) }
    </aside>
  )
}
