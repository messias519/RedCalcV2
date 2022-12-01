import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.titulo}>RedCalc</h1>

      <h2 className={styles.subtitulo}> Veja nossas funções:</h2>

      <nav className={styles.navegacao2}>
        <Link className={styles.navegacaolink2} href="/menu/calculadora">Calculadora de doses</Link>
        <br />
        <Link className={styles.navegacaolink2} href="/menu/convertertexto">Conversor de texto</Link>
      </nav>
    </div>
  );
}
