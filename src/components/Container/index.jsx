import styles from "../Container/styles.module.css"
import Image from "next/image"
export default function Container({children}){
    return(        
        <div className={styles.container}>
            <a title="link para whatsApp"  target="_blank" className={styles.iconFixed} href="https://api.whatsapp.com/send?phone=5551997357824"><Image width={96} height={96} className={styles.imgIconFixed} src="/images/iconWhatsFixed.svg" alt="" /></a>
            {children}
        </div>
    )
}