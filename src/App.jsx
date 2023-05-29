import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Henrique Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, commodi dolor. Autem in nobis cumque? Deserunt quia culpa dolorem odio deleniti. Eos quidem culpa, earum ex nemo necessitatibus non quae."
          />
          <Post
            author="Tiozinho"
            content="Aqui vem o conteudo do tiozinho"
          />
        </main>
      </div>
    </div>
  )
}
