import styles from "../Acting/styles.module.css"
export default function Acting({}){
    return(        
        <div className={styles.containerActing}>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconSeriousDiseases.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Doença Grave</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.aaaaaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaaa aaa</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconRetirement.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Aposentadoria</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconAccident.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Acidente</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconRural.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Rural</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconPublicServer.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Servidor Público</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>                
                </div>
                <div className={styles.cardActing}>
                    <img className={styles.iconCard} src="/images/iconDisables.svg" alt="" />
                    <div>
                        <h1 className={styles.titleCardActing}>Invalidez</h1>
                        <p className={styles.textCardActing}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>                
                </div>
        </div>
    )
}