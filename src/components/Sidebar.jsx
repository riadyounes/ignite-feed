import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/riadyounes.png" />
        <strong>Riad Younes</strong>
        <span>Full Stack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
