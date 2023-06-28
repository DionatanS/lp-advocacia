import styles from "../Adress/styles.module.css"
import Wrapper from "../Wrapper"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function Adress({children}){
    const [isAnimated, setIsAnimated] = useState(false);
    const [initialAnimationCompleted, setInitialAnimationCompleted] = useState(false);
  
    const onVisibilityChange = (isVisible) => {
      if (isVisible && !initialAnimationCompleted) {
        setIsAnimated(true);
        setInitialAnimationCompleted(true);
      }
    };
  
    const animationLeft = {
      hidden: { x: -200, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    };
    const animationRight = {
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    };
    return(        
       <div className={styles.containerAdress}>
            <Wrapper>
                <h2 className={styles.titleAdress}>Nosso endereço</h2>
                <div className={styles.contentAdress}>
                    <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
                                {({ isVisible }) => (
                                <motion.div
                                    className={styles.divColum}
                                    animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                                    variants={animationLeft}
                                    transition={{ duration: 0.9 }}
                                >
                                    <p className={styles.textAdress}>Atendimento presencial e digital, em todo Brasil com sede em Santa Catarina, no Edifício Augusto Towers, 65, sala 2030, 12 andar, Campinas - São José.</p>
                                    <a className={styles.btnAdress} href="">FALE CONOSCO<img src="/images/iconWhatsAdress.svg" alt="" /></a>
                                </motion.div>
                                )}
                    </VisibilitySensor>
                    <VisibilitySensor  partialVisibility onChange={onVisibilityChange}>
                                {({ isVisible }) => (
                                <motion.div
                                    className={styles.divColum}
                                    animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                                    variants={animationLeft}
                                    transition={{ duration: 0.9 }}
                                >
                                    <iframe className={styles.iframe}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.44742995714!2d-50.531462399999995!3d-29.8225043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518f813aaa83dd3%3A0xf228f06f01eb0958!2sR.%20Miguel%20Pereira%20dos%20Santos%2C%20250%20-%20Bom%20Princ%C3%ADpio%2C%20Santo%20Ant%C3%B4nio%20da%20Patrulha%20-%20RS%2C%2095500-000!5e0!3m2!1spt-BR!2sbr!4v1687384897368!5m2!1spt-BR!2sbr" frameBorder="0"></iframe>
                                   </motion.div>
                                )}
                    </VisibilitySensor>
                </div>
            </Wrapper>
       </div>
    )
}