import styles from "../Hero/styles.module.css"
import Image from "next/image"
export default function Hero({children}){
    return(        
        <div className={styles.containerHero}>
            <Image  width={2560} height={980} src="/images/imgHero.png" alt=""  className={styles.imgHeroDesk} priority="true"/>
            <Image width={480} height={290}  src="/images/heroMobile.png" alt=""  className={styles.imgHeroMobile} priority="true"/>
            <div className={styles.contentHero}>
                <Image width={670} height={196} src="/images/logo.png" alt="" className={styles.imgLogo} priority="true"/>
                <div className={styles.cointainerHeroText}>
                    <h2 className={styles.subtituloHero}>Não aceite benefícios <span className={styles.destaque}>negados</span> ou em <span className={styles.destaque}>análise</span> por tempo indefinido!</h2>
                    <p className={styles.textHero}><span className={styles.bold}>Temos a Solução para seus Benefícios Previdenciários!</span> Atendemos em todo o Brasil com Consultoria Especializada em <span className={styles.destaque}>Previdência Social</span>. Não deixe seus direitos serem negados, estamos aqui para oferecer a solução que você precisa.</p>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5551997357824" className={styles.buttonFaleConosco}>FALE CONOSCO <Image width={30} height={30} src="/images/iconeWhatsApp.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}