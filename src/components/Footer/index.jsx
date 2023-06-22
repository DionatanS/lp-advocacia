import styles from "../Footer/styles.module.css"
export default function Footer({children}){
    return(        
        <div className={styles.containerFooter}>
            <p className={styles.textFooter}>Copyright 2023 © Todos os direitos reservados | Desenvolvido por <a className={styles.linkFooter}>DsDesenvolvimento</a></p>
        </div>
    )
}