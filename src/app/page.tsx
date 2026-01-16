import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <ul>
          <li>
            Welcome to Life w| Laura
          </li>
          <li>sit back | relax | scroll</li>
          <li> Right here is a placehold for a picture</li>
        </ul>

      </main>
      <footer className={styles.footer}>
        Placeholder for connection links
      </footer>
    </div>
  );
}
