import styles from "../Differential/styles.module.scss";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion, useAnimation } from "framer-motion";
export default function Differential({}) {
  return (
    <div className={styles.containerDifferential}>
      <div className={styles.cardDifferential}>
        <h1 className={styles.emphasis}>100%</h1>
        <h2 className={styles.titleCard}>
          ATENDIMENTO
          <br />
          PERSONALIZADO
        </h2>
        <p className={styles.textCard}>
          Nosso objetivo é solucionar o seu caso, por isso o atendimento é
          personalizado e exclusivo pra você.
        </p>
      </div>
      <div className={styles.cardDifferential}>
        <h1 className={styles.emphasis}>+ De 10 anos</h1>
        <h2 className={styles.titleCard}>
          EXPERIÊNCIA EM DIREITO
          <br />
          PREVIDENCIÁRIO
        </h2>
        <p className={styles.textCard}>
          Com mais de 10 anos de experiência, nossa equipe oferece soluções
          eficientes e confiáveis.
        </p>
      </div>
      <div className={styles.cardDifferential}>
        <h1 className={styles.emphasis}>+ De 5 mil </h1>
        <h2 className={styles.titleCard}>
          CLIENTES
          <br />
          ATENDIDOS
        </h2>
        <p className={styles.textCard}>
          Com mais de 5.000 clientes atendidos, nossa equipe jurídica possui ampla
          experiência.
        </p>
      </div>
    </div>
  );
}
