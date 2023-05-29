import { Post } from "./Post"
import { Header } from "./components/Header";

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Henrique Lima"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi dolor. Autem in nobis cumque? Deserunt quia culpa dolorem odio deleniti. Eos quidem culpa, earum ex nemo necessitatibus non quae."
      />
      <Post 
        author="Tiozinho"
        content="Aqui vem o conteudo do tiozinho"
      />
    </div>
  )
}
