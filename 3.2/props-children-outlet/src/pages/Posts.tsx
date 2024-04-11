import PostsList from "../components/PostsList";
import posts from '../posts.json';
import './Posts.css';

export default function Posts() {
  return (
    <main className="main-container">
      <h1 className="title">Blog Para Praticar</h1>
      <PostsList postsList={ posts } />
    </main>
  );
}
