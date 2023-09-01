import styles from "../Contact/styles.module.css";
import Image from "next/image";
import Wrapper from "../Wrapper";
import InputMask from 'react-input-mask';
import React, { useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion, useAnimation } from "framer-motion";
import SuccessModal from "../SuccessModal";
export default function Contact({ children }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [initialAnimationCompleted, setInitialAnimationCompleted] =
    useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef(null);

  const onVisibilityChange = (isVisible) => {
    if (isVisible && !initialAnimationCompleted) {
      setIsAnimated(true);
      setInitialAnimationCompleted(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };
  const handleModalClose = () => {
    setShowSuccessModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    if (formRef.current) {
      formRef.current.reset();
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
  return (
    <div className={styles.containerContact}>
      <Wrapper>
        <h2 className={styles.titleContact}>Contato</h2>
        <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
          {({ isVisible }) => (
            <motion.div
              className={styles.divColum}
              animate={
                isAnimated || initialAnimationCompleted ? "visible" : "hidden"
              }
              variants={animationLeft}
              transition={{ duration: 0.9 }}
            >
              <div className={styles.contacts}>
                <a
                  title="link para whatsapp"
                  className={styles.linkContact}
                  href="https://api.whatsapp.com/send?phone=5551997357824"
                >
                  <Image
                    width={26}
                    height={26}
                    src="/images/IconWhatsContact.svg"
                    alt=""
                  />
                  (51) 9 9735-7824
                </a>
                <a
                  title="link para mandar email"
                  className={styles.linkContact}
                  href="mailto:joao.adv.civil@gmail.com"
                >
                  <Image
                    width={26}
                    height={26}
                    src="/images/iconEmail.svg"
                    alt=""
                  />
                  joao.adv.civil@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>
        <div className={styles.contentContact}>
          <div className={styles.divContactInf}></div>
          <form
            ref={formRef}
            action="https://formsubmit.co/joao.adv.civil@gmail.com"
            className={styles.containerform}
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Seu nome"
            />
            <div className={styles.containerNameEmail}>
              <InputMask
                  alt="input para digitar o telefone"
                  className={`${styles.inputMedium} ${styles.input}`}
                  mask="(99) 9 9999-9999"
                  type="tel"
                  name="phone"
                  placeholder="(99) 9 9999-9999"
                />
              <input
                alt="input para digitar o email"
                className={`${styles.inputMedium} ${styles.input}`}
                type="email"
                name="email"
                placeholder="Seu e-mail"
              />
            </div>
            <select
              className={styles.selectForm}
              name="Assunto"
              defaultValue="Selecione"
            >
              <option
                className={styles.option}
                value="Selecione um assunto"
                hidden
              >
                Selecione um assunto
              </option>
              <option className={styles.option} value="Previdenciário">
                Previdenciário
              </option>
              <option className={styles.option} value="Beneficios">
                Beneficios
              </option>
              <option className={styles.option} value="Duvidas">
                Dúvidas
              </option>
            </select>
            <textarea
              title="input para digitar a mensagem"
              className={styles.input}
              style={{ height: "120px" }}
              required
              name="Mensagem"
              placeholder="Mensagem"
            ></textarea>
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_autoresponse"
              value="Seu email foi recebido com sucesso em nossa caixa de email, vamos analizar e retornaremos."
            ></input>
            <input
              type="hidden"
              name="_next"
              value="https://aposentainss.com.br/"
            />
            <button
              title="botão para enviar email para o advogado"
              className={styles.btnSend}
              type="submit"
            >
              ENVIAR
            </button>
          </form>
          {showSuccessModal && (
            <SuccessModal onClose={() => {
              handleModalClose();
              setShowSuccessModal(false);
            }} />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
