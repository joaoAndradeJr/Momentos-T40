import { PostListProps } from '../types';
import PostCard from './PostCard';
import './PostsList.css';

export default function PostsList({ postsList }: PostListProps) {
  return (
    <section className="post-container">
      {
        postsList.map((post) => (
          // maneira de passar o post como children do PostCard (propsChildren)
          <PostCard key={ post.id }>
            {post}
          </PostCard> 
        ))
      }
    </section>
  );
}
