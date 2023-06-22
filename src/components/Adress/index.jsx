import styles from "../Adress/styles.module.css"
import Wrapper from "../Wrapper"
export default function Adress({children}){
    return(        
       <div className={styles.containerAdress}>
            <Wrapper>
                <h2 className={styles.titleAdress}>Nosso endereço</h2>
                <div className={styles.contentAdress}>
                    <div className={styles.divColum}>
                        <p className={styles.textAdress}>Atendimento presencial e digital, em todo Brasil com sede em Santa Catarina, no Edifício Augusto Towers, 65, sala 2030, 12 andar, Campinas - São José.</p>
                        <a className={styles.btnAdress} href="">FALE CONOSCO<img src="/images/iconWhatsAdress.svg" alt="" /></a>
                    </div>
                    <div className={styles.divColum}>
                      <iframe width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.44742995714!2d-50.531462399999995!3d-29.8225043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9518f813aaa83dd3%3A0xf228f06f01eb0958!2sR.%20Miguel%20Pereira%20dos%20Santos%2C%20250%20-%20Bom%20Princ%C3%ADpio%2C%20Santo%20Ant%C3%B4nio%20da%20Patrulha%20-%20RS%2C%2095500-000!5e0!3m2!1spt-BR!2sbr!4v1687384897368!5m2!1spt-BR!2sbr" frameBorder="0"></iframe>
                    </div>
                </div>
            </Wrapper>
       </div>
    )
}