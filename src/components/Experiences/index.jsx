import Acting from "../Acting";
import Differential from "../Differential";
import styles from "../Experiences/styles.module.scss";
import Wrapper from "../Wrapper";
export default function Experiences({ children }) {
  return (
    <div className={styles.containerExperiences}>
      <Wrapper>
        <Differential />
        <h2 className={styles.titleSectionExperiences}>
          Nossa experiência em casos{" "}
          <span style={{ color: "#D4A55F" }}>previdenciários</span> resolverá
          essas questões para você.
        </h2>
        <Acting />
        <h2 className={styles.titleSectionExperiences}>
          Problemas atípicos demandam soluções{" "}
          <span style={{ color: "#D4A55F" }}>personalizadas</span>. Compartilhe
          seu caso conosco para ajudarmos você.
        </h2>
        <a
          target="_blank"
          title="link para abrir whatsapp"
          href="https://api.whatsapp.com/send?phone=5551997357824"
          className={styles.btnReport}
        >
          RELATAR MEU CASO
        </a>
      </Wrapper>
    </div>
  );
}
