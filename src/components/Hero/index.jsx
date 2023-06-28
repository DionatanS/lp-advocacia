import styles from "../Hero/styles.module.css"
export default function Hero({children}){
    return(        
        <div className={styles.containerHero}>
            <img src="/images/imgHero.png" alt=""  className={styles.imgHeroDesk}/>
            <img src="/images/heroMobile.png" alt=""  className={styles.imgHeroMobile}/>
            <div className={styles.contentHero}>
                <img src="/images/logo.png" alt="" className={styles.imgLogo}/>
                <div className={styles.cointainerHeroText}>
                    <h2 className={styles.subtituloHero}>Não aceite benefícios <span className={styles.destaque}>negados</span> ou em <span className={styles.destaque}>análise</span> por tempo indefinido!</h2>
                    <p className={styles.textHero}><span className={styles.bold}>Temos a Solução para seus Benefícios Previdenciários!</span> Atendemos em todo o Brasil com Consultoria Especializada em <span className={styles.destaque}>Previdência Social</span>. Não deixe seus direitos serem negados, estamos aqui para oferecer a solução que você precisa.</p>
                    <a href="" className={styles.buttonFaleConosco}>FALE CONOSCO <img src="/images/iconeWhatsApp.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}