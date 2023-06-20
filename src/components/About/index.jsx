import styles from "../About/styles.module.css"
import Wrapper from "../Wrapper"
export default function About({children}){
    return(        
        <div className={styles.containerAbout}>
            <div className={styles.contentAbout}>
                <Wrapper>
                    <div className={styles.contentInfAbout}>
                        <img src="/images/imageAbout.svg" alt="" />
                        <div>
                            <h2 className={styles.titleAbout}>Sobre nós</h2>
                            <p className={styles.textAbout}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    )
}