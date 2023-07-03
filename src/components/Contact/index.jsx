import styles from "../Contact/styles.module.css"
import Image from "next/image";
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
                                        <Image width={320} height={138} className={styles.logocontact} src="/images/logoJbContact.svg" alt="" />
                                        <a title="link para mandar email" className={styles.linkContact} href="mailto:joao.adv.civil@gmail.com"><Image width={26} height={26} src="/images/iconEmail.svg" alt="" />joao.adv.civil@gmail.com</a>
                                        <a title="link para ligar para o telefone" className={styles.linkContact} href="tel:+5551997357824"><Image width={26} height={26} src="/images/IconPhone.svg" alt="" />(51) 9 9735-7824</a>
                                        <a title="link para whatsapp" className={styles.linkContact} href="https://api.whatsapp.com/send?phone=5551997357824"><Image width={26} height={26} src="/images/IconWhatsContact.svg" alt="" />(51) 9 9735-7824</a>
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
                                     <Image width={591} height={327} className={styles.imgContact} src="/images/imgContact.svg" alt="" />
                                </motion.div>
                                )}
                    </VisibilitySensor>                    
                    </div>
                    <form action="https://formsubmit.co/joao.adv.civil@gmail.com" className={styles.containerform} method="POST">
                        <input className={styles.input} type="text" name="name" placeholder="Seu nome" />
                        <div className={styles.containerNameEmail}>
                            <input alt="input para digitar o nome" className={`${styles.inputMedium} ${styles.input}`} type="tel" name="phone" placeholder="(99) 9 9999-9999" />
                            <input alt="input para digitar o email" className={`${styles.inputMedium} ${styles.input}`} type="email" name="email" placeholder="Seu e-mail" />
                        </div>
                        <select className={styles.selectForm} name="Assunto" defaultValue="Selecione">
                            <option className={styles.option} value="Selecione um assunto" hidden>Selecione um assunto</option>
                            <option className={styles.option} value="Previdenciário">Previdenciário</option>
                            <option className={styles.option} value="Beneficios">Beneficios</option>
                            <option className={styles.option} value="Duvidas">Dúvidas</option>
                        </select>
                        <textarea title="input para digitar a mensagem" className={styles.input} style={{ height: "120px" }} required name="Mensagem" placeholder="Mensagem"></textarea>
                        <input type="hidden" name="_next" value="/" />
                        <input type="hidden" name="_captcha" value="false"></input>
                        <button title="botão para enviar email para o advogado" className={styles.btnSend} type="submit">ENVIAR</button>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}