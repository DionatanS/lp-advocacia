import styles from "../Adress/styles.module.scss";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import Wrapper from "../Wrapper";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion, useAnimation } from "framer-motion";
export default function Adress({ children }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [initialAnimationCompleted, setInitialAnimationCompleted] =
    useState(false);

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
  return (
    <div className={styles.containerAdress}>
      <Wrapper>
        <h2 className={styles.titleAdress}>Nosso endereço</h2>
        <div className={styles.contentAdress}>
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
                <p className={styles.textAdress}>
                  Atendimento presencial e digital, com sede em Rio Grande do
                  Sul, Rua Fernando Ferrari, 965, sala 103, Esteio.
                </p>
                <a
                  title="link para falar conosco no whatsapp"
                  className={styles.btnAdress}
                  href="https://api.whatsapp.com/send?phone=5551997357824"
                >
                  FALE CONOSCO
                  <Image
                    width={30}
                    height={30}
                    src="/images/iconWhatsAdress.svg"
                    alt=""
                  />
                </a>
              </motion.div>
            )}
          </VisibilitySensor>
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
                <LazyLoad
                  style={{ width: "100%", height: "100%" }}
                  once
                  offset={500}
                >
                  <iframe
                    height={290}
                    title="local para visualizar o mapa"
                    className={styles.iframe}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.577363607139!2d-51.1721729!3d-29.8476188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196f670247769f%3A0x25122e309419dab6!2sR.%20Fernando%20Ferrari%2C%20965%20-%20Centro%2C%20Esteio%20-%20RS%2C%2093260-030!5e0!3m2!1spt-BR!2sbr!4v1693589554999!5m2!1spt-BR!2sbr"
                    frameBorder="0"
                  ></iframe>
                </LazyLoad>
              </motion.div>
            )}
          </VisibilitySensor>
        </div>
      </Wrapper>
    </div>
  );
}
