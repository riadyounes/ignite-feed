import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/riadyounes.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Riad Younes</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <time title="3 de feveiro às 08:34h" dateTime="2023-02-03 08:34:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a> <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button className={styles.button} type="submit">
            Publicar
          </button>
        </footer>
      </form>
    </article>
  );
}
