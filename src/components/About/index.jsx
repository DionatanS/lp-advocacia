import styles from "../About/styles.module.css"
import Wrapper from "../Wrapper"
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { motion, useAnimation } from 'framer-motion';
export default function About({children}){
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
        <div className={styles.containerAbout}>
            <div className={styles.contentAbout}>
                <Wrapper>
                    <div className={styles.contentInfAbout}>
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                        <motion.div
                            style={{ zIndex: "999" }}
                            animate={isVisible ? 'visible' : 'hidden'}
                            variants={animationLeft}
                            transition={{ duration: 0.5 }}
                        >
                            <img src="/images/imageAbout.svg" alt="" />
                        </motion.div>
                        )}
                    </VisibilitySensor>
                    <VisibilitySensor partialVisibility>
                        {({ isVisible }) => (
                        <motion.div
                            style={{ zIndex: "999" }}
                            animate={isVisible ? 'visible' : 'hidden'}
                            variants={animationRigth}
                            transition={{ duration: 0.5 }}
                        >
                            <div>
                                <h2 className={styles.titleAbout}>Sobre nós</h2>
                                <p className={styles.textAbout}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </motion.div>
                        )}
                    </VisibilitySensor>                      
                        
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}