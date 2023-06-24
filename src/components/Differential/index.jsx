import styles from "../Differential/styles.module.css"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function Differential({}){
    // const onVisibilityChange = (isVisible) => {
    //   setIsVisible(isVisible);
    // };
  
    // const animationLeft = {
    //     hidden: { x: -200, opacity: 0 },
    //     visible: { x: 0, opacity: 1 },
    // };
    // const animationRigth = {
    //     hidden: { x: 200, opacity: 0 },
    //     visible: { x: 0, opacity: 1 },
    // };
    return(        
        <div className={styles.containerDifferential}>
                    <div className={styles.cardDifferential}>
                        <h1 className={styles.emphasis}>100%</h1>
                        <h2 className={styles.titleCard}>ATENDIMENTO<br />PERSONALIZADO</h2>
                        <p className={styles.textCard}>Nosso compromisso com o atendimento personalizado significa que você receberá suporte exclusivo</p>
                    </div>
                    <div className={styles.cardDifferential}>
                        <h1 className={styles.emphasis}>+10 anos</h1>
                        <h2 className={styles.titleCard}>EXPERIÊNCIA DIREITO<br />PREVIDENCIÁRIO</h2>
                        <p className={styles.textCard}>Com mais de 10 anos de experiência em advocacia, nossa equipe oferece soluções eficientes e confiáveis.</p>
                    </div>  
                    <div className={styles.cardDifferential}>
                        <h1 className={styles.emphasis}>+5,000</h1>
                        <h2 className={styles.titleCard}>CASOS<br />ATENDIDOS</h2>
                        <p className={styles.textCard}>Com mais de 5.000 casos atendidos, nossa equipe jurídica possui ampla experiência em solucionar diversas</p>
                    </div>
        </div>
    )
}