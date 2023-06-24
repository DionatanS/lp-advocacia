import styles from "../Acting/styles.module.css"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function Acting({}){  
    const onVisibilityChange = (isVisible) => {
      setIsVisible(isVisible);
    };
  
    const animationLeft = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    const animationRigth = {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    return(        
        <div className={styles.containerActing}>
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationLeft}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconSeriousDiseases.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Doença Grave</h1>
                        <p className={styles.textCardActing}>Benefício concedido a trabalhadores permanentemente incapacitados devido a uma doença grave.</p>
                    </div>
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationLeft}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                        <img className={styles.iconCard} src="/images/iconRetirement.svg" alt="" />
                        <div>
                            <h1 className={styles.titleCardActing}>Aposentadoria</h1>
                            <p className={styles.textCardActing}>Benefício que garante renda mensal após o término da vida profissional.</p>
                        </div>                
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationLeft}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                        <img className={styles.iconCard} src="/images/iconAccident.svg" alt="" />
                        <div>
                            <h1 className={styles.titleCardActing}>Acidente</h1>
                            <p className={styles.textCardActing}>Benefício para trabalhadores incapacitados devido a acidentes de trabalho ou doenças ocupacionais</p>
                        </div>                
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>   
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationRigth}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                        <img className={styles.iconCard} src="/images/iconRural.svg" alt="" />
                        <div>
                            <h1 className={styles.titleCardActing}>Rural</h1>
                            <p className={styles.textCardActing}>Benefício para trabalhadores do campo com base no tempo de trabalho rural.</p>
                        </div>                
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>              
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationRigth}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                        <img className={styles.iconCard} src="/images/iconPublicServer.svg" alt="" />
                        <div>
                            <h1 className={styles.titleCardActing}>Servidor Público</h1>
                            <p className={styles.textCardActing}>Benefício vitalício para servidores estatutários ou celetistas com base no tempo de contribuição.</p>
                        </div>                
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>                           
             <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                <motion.div
                    style={{ zIndex: "999" }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    variants={animationRigth}
                    transition={{ duration: 0.7 }}
                >
                    <div className={styles.cardActing}>
                        <img className={styles.iconCard} src="/images/iconDisables.svg" alt="" />
                        <div>
                            <h1 className={styles.titleCardActing}>Invalidez</h1>
                            <p className={styles.textCardActing}>Benefício concedido a trabalhadores que se encontram permanentemente </p>
                        </div>                
                    </div>
                </motion.div>
                )}
            </VisibilitySensor>                           
        </div>
    )
}