import styles from "../Contact/styles.module.css"
import Wrapper from "../Wrapper"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function Contact({children}){
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
        <div className={styles.containerContact}>
            <Wrapper>
                <div className={styles.contentContact}>
                    <div className={styles.divContactInf}>
                    <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
                                {({ isVisible }) => (
                                <motion.div
                                    className={styles.divColum}
                                    animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                                    variants={animationLeft}
                                    transition={{ duration: 0.9 }}
                                >
                                     <div className={styles.contacts}>
                                        <img className={styles.logocontact} src="/images/logoJbContact.svg" alt="" />
                                        <a title="link para mandar email" className={styles.linkContact} href="mailto:joao.adv.civil@gmail.com"><img src="/images/iconEmail.svg" alt="" />joao.adv.civil@gmail.com</a>
                                        <a title="link para ligar para o telefone" className={styles.linkContact} href="tel:+5551997357824"><img src="/images/IconPhone.svg" alt="" />(51) 9 9735-7824</a>
                                        <a title="link para whatsapp" className={styles.linkContact} href="https://api.whatsapp.com/send?phone=5551997357824"><img src="/images/IconWhatsContact.svg" alt="" />(51) 9 9735-7824</a>
                                    </div>
                                </motion.div>
                                )}
                    </VisibilitySensor>                    
                    <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
                                {({ isVisible }) => (
                                <motion.div
                                    className={styles.divColum}
                                    animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                                    variants={animationRight}
                                    transition={{ duration: 0.9 }}
                                >
                                     <img className={styles.imgContact} src="/images/imgContact.svg" alt="" />
                                </motion.div>
                                )}
                    </VisibilitySensor>                    
                    </div>
                    <form action="" className={styles.containerform}>
                        <input className={styles.input} type="text" name="name" id="" placeholder="Seu nome"/>
                        <div className={styles.containerNameEmail}>
                            <input alt="input para digitar o nome" className={`${styles.inputMedium} ${styles.input}`} type="tel" name="phone" placeholder="(99) 9 9999-9999"/>
                            <input alt="input para digitar o email" className={`${styles.inputMedium} ${styles.input}`} type="email" name="email" id="" placeholder="Seu e-mail"/>
                        </div>
                        <select className={styles.selectForm}name="Assunto" defaultValue="Selecione">
                            <option className={styles.option} value="Selecione um assunto"  hidden>Selecione um assunto</option>
                            <option className={styles.option} value="Previdenciário">Previdenciário</option>
                            <option className={styles.option} value="Beneficios">Beneficios</option>
                            <option className={styles.option} value="Duvidas">Dúvidas</option>
                        </select>
                        <textarea title="input para digitar a mensagem" className={styles.input} style={{height:"120px"}} required name="Mensagem" placeholder="Mensagem"></textarea>
                        <button title="botão para enviar email para o advogado" className={styles.btnSend} type="submit">ENVIAR</button>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}