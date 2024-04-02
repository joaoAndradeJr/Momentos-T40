import ListProducts from './components/ListProducts';
import { produtos, produtosNovos } from './utils';

function App() {
  return (
   <>
    <h1>Vamos revisar React com Props e Typescript?</h1>
    <section>
      <ListProducts products={ produtos } />
      </section>
    <hr />
    <section>
      <ListProducts products={ produtosNovos} />
    </section>
   </>
  );
}

export default App
