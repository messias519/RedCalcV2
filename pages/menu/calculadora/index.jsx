import Link from "next/link";
import React, { useState } from 'react';
import styles from "../../../styles/Home.module.css";

export default function Calculadora() {
  const [patientWeight, setPatientWeight] = useState(70);
  const [infusionRate, setInfusionRate] = useState(10);
  const [medicationVolume, setMedicationVolume] = useState(0);
  const [solutionVolume, setSolutionVolume] = useState(0);
  const [medicationConcentration, setMedicationConcentration] = useState(0);

  const [dose, setDose] = useState(0);

  const handleChange = (e) => {
    if (e.target.value === 'Nora') {
      setMedicationVolume(16);
      setSolutionVolume(250);
      setMedicationConcentration(1);
    } else if (e.target.value === 'Dobuta') {
      setMedicationVolume(80);
      setSolutionVolume(250);
      setMedicationConcentration(12.5);
    }
  };

  const calculateDose = () => {
    setDose((((
      infusionRate * (medicationConcentration * medicationVolume)) / solutionVolume) / 60) / patientWeight * 1000);
  };


  return (
    <div>
      <h1 className={styles.titulo}>RedCalc</h1>
      <h2 className={styles.subtitulo}>Calculadora de Doses</h2>

      <nav className={styles.navegacao}>

        <Link className={styles.navegacaolink} href="/">MenuPrincipal</Link>

      </nav>

      <div className={styles.container}>
        <select className={styles.inputmenusus} onChange={handleChange}>
          <option> Selecione a medicação: </option>
          <option value="Nora">Nora 4:1</option>
          <option value="Dobuta">Dobuta 4:1</option>
        </select>
        <label > Peso do paciente (kg):</label>
        <input className={styles.input}
          type="number"
          min={40}
          max={150}
          value={patientWeight}
          onChange={(e) => setPatientWeight(e.target.value)}
        />

        <label>Velocidade de infusão:</label>
        <input className={styles.input}
          type="number"
          min={0}
          max={200}
          value={infusionRate}
          onChange={(e) => setInfusionRate(e.target.value)}
        />

        <label>Volume da medicação:</label>
        <input className={styles.input}
          type="number"
          value={medicationVolume}
          onChange={(e) => setMedicationVolume(e.target.value)}
        />

        <label>Volume da solução:</label>
        <input className={styles.input}
          type="number"
          value={solutionVolume}
          onChange={(e) => setSolutionVolume(e.target.value)}
        />

        <label>Concentração da ampola da medicação:</label>
        <input className={styles.input}
          type="number"
          value={medicationConcentration}
          onChange={(e) => setMedicationConcentration(e.target.value)}
        />

        <button onClick={calculateDose}>Calcular dose</button>

        <label className={styles.resultado}>Dose: {parseFloat(dose).toFixed(2)} mcg/kg/min</label>

        <div className={styles.linkexterno}>
          <a target="_blank" href="https://www.mediafire.com/file/nls50ko0bqdtsvq/Planilha_de_dilui%25C3%25A7%25C3%25A3o.xlsx/file">Planilha com diversas drogas</a>
        </div>
      </div>


    </div >
  );
}
