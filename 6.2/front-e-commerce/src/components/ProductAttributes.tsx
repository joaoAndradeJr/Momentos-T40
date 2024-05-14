import { Attribute } from '../types';
import './ProductAttributes.css';

export default function ProductAttributes({ attributes }: { attributes: Attribute[] }) {
  return (
    <table className="vertical-table">
      <thead>
        <tr className="vertical-header">
          { attributes.map((attribute) => (
            <th key={attribute.id} className="vertical-header-cell">{attribute.name}</th>
          )) }
        </tr>
      </thead>
      <tbody>
        <tr className="vertical-data">
          { attributes.map((attribute) => (
            <td key={attribute.id} className="vertical-data-cell">{attribute.value_name}</td>
          )) }
        </tr>
      </tbody>
    </table>
  );
}
