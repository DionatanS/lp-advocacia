import styles from "../Container/styles.module.css"
export default function Container({children}){
    return(        
        <div className={styles.container}>
            <a className={styles.iconFixed} href=""><img src="/images/iconWhatsFixed.svg" alt="" /></a>
            {children}
        </div>
    )
}