import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/blog" element={ <Posts /> } />
      </Route>
      <Route path="*" element={ <h1>NOT FOUND</h1> } />
    </Routes>
  );
}

export default App
