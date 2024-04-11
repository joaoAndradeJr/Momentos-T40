import PostCard from './PostCard';

export default function PostsList({ postsList }) {
  return (
    <section>
      {
        postsList.map((post) => (
          <PostCard key={ post.id }>
            {post}
          </PostCard> 
        ))
      }
    </section>
  );
}
