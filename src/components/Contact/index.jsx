import styles from "../Contact/styles.module.css"
import Wrapper from "../Wrapper"
export default function Contact({children}){
    return(        
        <div className={styles.containerContact}>
            <Wrapper>
                <div className={styles.contentContact}>
                    <div className={styles.divContactInf}>
                        <div className={styles.contacts}>
                            <img src="/images/logoJbContact.svg" alt="" />
                            <a className={styles.linkContact} href=""><img src="/images/iconEmail.svg" alt="" />loremipsun@gmail.com.br</a>
                            <a className={styles.linkContact} href=""><img src="/images/iconPhone.svg" alt="" />(51) 3333 - 0000</a>
                            <a className={styles.linkContact} href=""><img src="/images/iconWhatsContact.svg" alt="" />(51) 3333 - 0000</a>
                        </div>
                        <img src="/images/imgContact.svg" alt="" />
                    </div>
                    <form action="">
                        <input type="text" name="name" id="" placeholder="Seu nome"/>
                        <div>
                            <input type="tel" name="phone" placeholder="(99) 9 9999-9999"/>
                            <input type="email" name="email" id="" placeholder="Seu e-mail"/>
                        </div>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}