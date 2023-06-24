import Acting from "../Acting"
import Differential from "../Differential"
import styles from "../Experiences/styles.module.css"
import Wrapper from "../Wrapper"
export default function Experiences({ children }) {
    return (
        <div className={styles.containerExperiences}>
            <Wrapper>
                <Differential/>
                <h2 className={styles.titleSectionExperiences}>Nossa experiência em casos <span style={{color:"#D4A55F"}}>previdenciários</span> irá resolver essa questão para você.</h2>
                <Acting/>
                <h2 className={styles.titleSectionExperiences}>Problemas atípicos demandam soluções <span style={{color:"#D4A55F"}}>personalizadas</span>. Compartilhe seu caso conosco para ajudarmos você.</h2>
                <a href="" className={styles.btnReport}>RELATAR MEU CASO</a>
            </Wrapper>
        </div>

    )
}