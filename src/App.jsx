import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Riad Youunes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero, ullam neque cum ducimus delectus assumenda. Iste, dolor! Repellat voluptatibus officiis asperiores deleniti fugit velit, unde natus commodi delectus! Quam!"
          />
          <Post
            author="Riad Youunes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero libero, ullam neque cum ducimus delectus assumenda. Iste, dolor! Repellat voluptatibus officiis asperiores deleniti fugit velit, unde natus commodi delectus! Quam!"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
