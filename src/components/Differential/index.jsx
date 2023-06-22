import styles from "../Differential/styles.module.css"
export default function Differential({}){
    return(        
        <div className={styles.containerDifferential}>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>100%</h1>
                <h2 className={styles.titleCard}>ATENDIMENTO<br />PERSONALIZADO</h2>
                <p className={styles.textCard}>Nosso compromisso com o atendimento personalizado significa que você receberá suporte exclusivo, adaptado especificamente para atender às suas expectativas e requisitos.</p>
            </div>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>+10 anos</h1>
                <h2 className={styles.titleCard}>EXPERIÊNCIA DIREITO<br />PREVIDENCIÁRIO</h2>
                <p className={styles.textCard}>Com mais de 10 anos de experiência em advocacia, nossa equipe oferece soluções eficientes e confiáveis para atender às necessidades legais dos nossos clientes com expertise comprovada.</p>
            </div>
            <div className={styles.cardDifferential}>
                <h1 className={styles.emphasis}>+5,000</h1>
                <h2 className={styles.titleCard}>CASOS<br />ATENDIDOS</h2>
                <p className={styles.textCard}>Com mais de 5.000 casos atendidos, nossa equipe jurídica possui ampla experiência em solucionar diversas questões legais, oferecendo resultados satisfatórios aos nossos clientes.</p>
            </div>
        </div>
    )
}