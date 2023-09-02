import styles from "../Wrapper/styles.module.scss"
export default function Wrapper({children}){
    return(
       <div className={styles.wrapper}>
            {children}
       </div>
    )
}