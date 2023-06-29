import styles from "../Container/styles.module.css"
export default function Container({children}){
    return(        
        <div className={styles.container}>
            <a title="link para whatsApp"  target="_blank" className={styles.iconFixed} href="https://api.whatsapp.com/send?phone=5551997357824"><img className={styles.imgIconFixed} src="/images/iconWhatsFixed.svg" alt="" /></a>
            {children}
        </div>
    )
}