import React from "react";
import styles from "../SuccessModal/styles.module.css";

const SuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2 className={styles.titleModal}>Email enviado!</h2>
        <p className={styles.textModal}>Sua mensagem foi enviada com sucesso.</p>
        {/* <button className={styles.buttonModal} onClick={onClose}>OK</button> */}
      </div>
    </div>
  );
};

export default SuccessModal;
