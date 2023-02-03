import styles from "./Header.module.css";
import igniteLogo from "../assets/logo-ignite.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
    </header>
  );
}
