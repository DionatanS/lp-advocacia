import styles from "../Contact/styles.module.css"
import Wrapper from "../Wrapper"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function Contact({children}){
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
        <div className={styles.containerContact}>
            <Wrapper>
                <div className={styles.contentContact}>
                    <div className={styles.divContactInf}>                    
                        <VisibilitySensor partialVisibility>
                            {({ isVisible }) => (
                            <motion.div
                                style={{ zIndex: "999" }}
                                animate={isVisible ? 'visible' : 'hidden'}
                                variants={animationLeft}
                                transition={{ duration: 0.7 }}
                            >
                                <div className={styles.contacts}>
                                    <img className={styles.logocontact} src="/images/logoJbContact.svg" alt="" />
                                    <a className={styles.linkContact} href=""><img src="/images/iconEmail.svg" alt="" />loremipsun@gmail.com.br</a>
                                    <a className={styles.linkContact} href=""><img src="/images/IconPhone.svg" alt="" />(51) 3333 - 0000</a>
                                    <a className={styles.linkContact} href=""><img src="/images/IconWhatsContact.svg" alt="" />(51) 9 9999 - 9999</a>
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
                                <img className={styles.imgContact} src="/images/imgContact.svg" alt="" />
                            </motion.div>
                            )}
                        </VisibilitySensor>
                    </div>
                    <form action="" className={styles.containerform}>
                        <input className={styles.input} type="text" name="name" id="" placeholder="Seu nome"/>
                        <div className={styles.containerNameEmail}>
                            <input className={`${styles.inputMedium} ${styles.input}`} type="tel" name="phone" placeholder="(99) 9 9999-9999"/>
                            <input className={`${styles.inputMedium} ${styles.input}`} type="email" name="email" id="" placeholder="Seu e-mail"/>
                        </div>
                        <select className={styles.selectForm}name="Assunto" defaultValue="Selecione">
                            <option className={styles.option} value="Selecione um assunto"  hidden>Selecione um assunto</option>
                            <option className={styles.option} value="compras">Compras</option>
                            <option className={styles.option} value="sujestao">Sugestão</option>
                            <option className={styles.option} value="duvidas">Dúvidas</option>
                        </select>
                        <textarea className={styles.input} style={{height:"120px"}} required name="Mensagem" placeholder="Mensagem"></textarea>
                        <button className={styles.btnSend} type="submit">ENVIAR</button>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}