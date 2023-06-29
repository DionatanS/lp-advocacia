import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from 'framer-motion';
import styles from "../Areas/styles.module.css";
import Wrapper from "../Wrapper";

export default function Areas({ children }) {
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

  return (
    <div className={styles.containerAreas}>
      <Wrapper>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className={styles.titleAreas}>Áreas de Atuação</h2>
        </div>
        <div className={styles.containerCardsArea}>
          <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
            {({ isVisible }) => (
              <motion.div
                style={{ zIndex: "999" }}
                animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                variants={animationLeft}
                transition={{ duration: 0.9 }}
              >
                <div className={styles.contentCardAreas}>
                  <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                  <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
            {({ isVisible }) => (
              <motion.div
                style={{ zIndex: "999" }}
                animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                variants={animationLeft}
                transition={{ duration: 0.9 }}
              >
                <div className={styles.contentCardAreas}>
                  <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                  <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
            {({ isVisible }) => (
              <motion.div
                style={{ zIndex: "999" }}
                animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                variants={animationLeft}
                transition={{ duration: 0.9 }}
              >
                <div className={styles.contentCardAreas}>
                  <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                  <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
            {({ isVisible }) => (
              <motion.div
                style={{ zIndex: "999" }}
                animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                variants={animationLeft}
                transition={{ duration: 0.9 }}
              >
                <div className={styles.contentCardAreas}>
                  <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                  <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility onChange={onVisibilityChange}>
            {({ isVisible }) => (
              <motion.div
                style={{ zIndex: "999" }}
                animate={isAnimated || initialAnimationCompleted ? "visible" : "hidden"}
                variants={animationLeft}
                transition={{ duration: 0.9 }}
              >
                <div className={styles.contentCardAreas}>
                  <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                  <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                </div>
              </motion.div>
            )}
          </VisibilitySensor>
        </div>
        <a target='_blank' title='Link apra whatsApp' href="https://api.whatsapp.com/send?phone=5551997357824" className={styles.btnScheduling}>FAZER AGENDAMENTO</a>
      </Wrapper>
    </div>
  );
}