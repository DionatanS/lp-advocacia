import styles from "../Differential/styles.module.css"
export default function Differential({}){
    return(        
        <div className={styles.containerDifferential}>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>100%</h1>
                <h2 className={styles.titleCard}>ATENDIMENTO<br />PERSONALIZADO</h2>
                <p className={styles.textCard}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor, sit amet consectetur adipisicing elit.ossimus quo, vero numquam dicta rem!</p>
            </div>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>+10 anos</h1>
                <h2 className={styles.titleCard}>EXPERIÊNCIA DIREITO<br />PREVIDENCIÁRIO</h2>
                <p className={styles.textCard}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor, sit amet consectetur adipisicing elit.ossimus quo, vero numquam dicta rem!</p>
            </div>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>+5,000</h1>
                <h2 className={styles.titleCard}>CASOS<br />ATENDIDOS</h2>
                <p className={styles.textCard}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor, sit amet consectetur adipisicing elit.ossimus quo, vero numquam dicta rem!</p>
            </div>
        </div>
    )
}