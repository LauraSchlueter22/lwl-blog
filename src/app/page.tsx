import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to Life W| Laura</h1>
          <h2>sit back | relax | scroll</h2>
          <li> Right here is a placehold for a picture</li>
      </main>
      <footer className={styles.footer}>
        Placeholder for connection links
      </footer>
    </div>
  );
}
