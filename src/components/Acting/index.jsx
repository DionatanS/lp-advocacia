import styles from "../Acting/styles.module.css"
export default function Acting({}){
    return(        
        <div className={styles.containerActing}>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconSeriousDiseases.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Doença Grave</h1>
                        <p className={styles.textCardActing}> Benefício concedido a trabalhadores permanentemente incapacitados devido a uma doença grave.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconRetirement.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Aposentadoria</h1>
                        <p className={styles.textCardActing}>Benefício que garante renda mensal após o término da vida profissional.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconAccident.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Acidente</h1>
                        <p className={styles.textCardActing}>Benefício para trabalhadores incapacitados devido a acidentes de trabalho ou doenças ocupacionais</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconRural.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Rural</h1>
                        <p className={styles.textCardActing}>Benefício para trabalhadores do campo com base no tempo de trabalho rural.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconPublicServer.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Servidor Público</h1>
                        <p className={styles.textCardActing}>Benefício vitalício para servidores estatutários ou celetistas com base no tempo de contribuição.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconDisables.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Invalidez</h1>
                        <p className={styles.textCardActing}>Benefício concedido a trabalhadores que se encontram permanentemente </p>
                    </div>                
                </div>
        </div>
    )
}