import { PostCardProps } from '../types';
import './PostCard.css';

export default function PostCard(props: PostCardProps) {
  const { children } = props;
  const { text, image, likes, tags, publishDate } = children;

  return (
    <article className="article-container">
      <h2 className="subtitle">{ text }</h2>
      <img src={ image } alt={ `photo ${text}` } className="photo" />
      <h4>{ `👍 ${likes}` }</h4>
      <h4>Categories:
        { tags.map((tag) => (
          <span key={ tag } className="tags">{ tag }</span>
        ))}
      </h4>
      <h4>{ `Post date: ${publishDate.split('T')[0]}` }</h4>
    </article>
  );
}
