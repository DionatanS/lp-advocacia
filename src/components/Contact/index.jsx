import styles from "../Contact/styles.module.css"
import Wrapper from "../Wrapper"
export default function Contact({children}){
    return(        
        <div className={styles.containerContact}>
            <Wrapper>
                <div className={styles.contentContact}>
                    <div className={styles.divContactInf}>
                        <div className={styles.contacts}>
                            <img className={styles.logocontact} src="/images/logoJbContact.svg" alt="" />
                            <a className={styles.linkContact} href=""><img src="/images/iconEmail.svg" alt="" />loremipsun@gmail.com.br</a>
                            <a className={styles.linkContact} href=""><img src="/images/IconPhone.svg" alt="" />(51) 3333 - 0000</a>
                            <a className={styles.linkContact} href=""><img src="/images/IconWhatsContact.svg" alt="" />(51) 9 9999 - 9999</a>
                        </div>
                        <img className={styles.imgContact} src="/images/imgContact.svg" alt="" />
                    </div>
                    <form action="" className={styles.containerform}>
                        <input className={styles.input} type="text" name="name" id="" placeholder="Seu nome"/>
                        <div className={styles.containerNameEmail}>
                            <input className={`${styles.inputMedium} ${styles.input}`} type="tel" name="phone" placeholder="(99) 9 9999-9999"/>
                            <input className={`${styles.inputMedium} ${styles.input}`} type="email" name="email" id="" placeholder="Seu e-mail"/>
                        </div>
                        <select className={styles.selectForm}name="Assunto" defaultValue="Selecione">
                            <option className={styles.option} value="Selecione um assunto"  hidden>Selecione um assunto</option>
                            <option className={styles.option} value="compras">Compras</option>
                            <option className={styles.option} value="sujestao">Sugestão</option>
                            <option className={styles.option} value="duvidas">Dúvidas</option>
                        </select>
                        <textarea className={styles.input} style={{height:"120px"}} required name="Mensagem" placeholder="Mensagem"></textarea>
                        <button className={styles.btnSend} type="submit">ENVIAR</button>
                    </form>
                </div>
            </Wrapper>
        </div>
    )
}