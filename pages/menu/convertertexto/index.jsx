import Link from "next/link";
import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";

export default function ConverterTexto() {
  const [text, setText] = useState("");
  const [font, setFont] = useState("Calibri");
  const [fontSize, setFontSize] = useState("14px");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setText(text.toUpperCase());
  };

  const handleClear = () => {
    setText("");
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };
  return (
    <div>
      <h1 className={styles.titulo}>RedCalc</h1>

      <h2 className={styles.subtitulo}>ConverterTexto</h2>

      <nav className={styles.navegacao}>

        <Link className={styles.navegacaolink} href="/">MenuPrincipal</Link>

      </nav>

      <div className={styles.container}>
        <div className={styles.selectcontainer}>
          <select className={styles.select} value={font} onChange={handleFontChange}>
            <option value="Calibri">Calibri</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
          <select className={styles.select} value={fontSize} onChange={handleFontSizeChange}>
            <option value="10px">10px</option>
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
          </select>
        </div>
        <textarea
          value={text}
          onChange={handleChange}
          style={{ fontFamily: font, fontSize: fontSize }}
          className={styles.textarea}
        />
        <button className={styles.botao} onClick={handleClick}>Transformar em maiúsculo</button>
        <button className={styles.botao} onClick={handleClear}>Limpar</button>
      </div>

    </div>
  );
}
