import PostsList from "../components/PostsList";
import posts from '../posts.json';

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <PostsList postsList={ posts } />
    </>
  );
}
