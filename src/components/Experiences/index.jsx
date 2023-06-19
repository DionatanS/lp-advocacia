import styles from "../Experiences/styles.module.css"
import Wrapper from "../Wrapper"
export default function Experiences({ children }) {
    return (
        <div className={styles.containerExperiences}>
            <Wrapper>
                <h2 className={styles.titleSectionExperiences}>Nossa experiência em casos previdenciários irá resolver essa questão para você.</h2>
            </Wrapper>
        </div>

    )
}