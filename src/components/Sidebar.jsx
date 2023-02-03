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
        <img
          className={styles.avatar}
          src="https://github.com/riadyounes.png"
          alt="Foto de perfil"
        />
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
