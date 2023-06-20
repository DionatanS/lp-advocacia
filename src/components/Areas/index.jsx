import styles from "../Areas/styles.module.css"
import Wrapper from "../Wrapper"
export default function Areas({children}){
    return(        
        <div className={styles.containerAreas}>
            <Wrapper>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h2 className={styles.titleAreas}>Áreas de Atuação</h2>
                </div>
                <div className={styles.containerCardsArea}>
                    <div>
                        <h2 className={styles.titleCardAreas}>PREVIDENCIÁRIO</h2>
                        <p className={styles.textCardAreas}>Envolve questões como aposentadoria, pensão por morte, auxílio-doença e auxílio-maternidade. Tem como objetivo garantir a proteção social aos trabalhadores e seus dependentes, proporcionando-lhes segurança financeira em situações de invalidez, idade avançada, doença ou morte. É regulado por leis e normas específicas que visam assegurar o acesso justo e equitativo aos benefícios previdenciários.</p>
                    </div>
                    <div>
                        <h2 className={styles.titleCardAreas}>DIREITO CIVIL</h2>
                        <p className={styles.textCardAreas}>Ramo do direito que trata das normas e regras que regulam as relações jurídicas entre indivíduos, sejam elas de natureza pessoal ou patrimonial. Envolve questões como contratos, propriedade, responsabilidade civil e direitos de família. O objetivo do direito civil é garantir a harmonia e a justiça nas relações entre as pessoas, assegurando direitos e estabelecendo deveres.</p>
                    </div>
                    <div>
                        <h2 className={styles.titleCardAreas}>DIREITO DE CONSUMIDOR</h2>
                        <p className={styles.textCardAreas}>Direito que visa proteger os interesses e direitos dos consumidores nas relações de consumo. Ele estabelece normas para garantir a qualidade dos produtos e serviços, além de regulamentar a publicidade, o direito à informação e a segurança do consumidor. Também prevê mecanismos de solução de conflitos, como a possibilidade de reclamações, trocas e devoluções. O objetivo principal do direito do consumidor é equilibrar as relações entre fornecedores e consumidores, promovendo a transparência, a segurança e a efetivação dos direitos dos consumidores.</p>
                    </div>
                    <div>
                        <h2 className={styles.titleCardAreas}>DIREITO DE FAMÍLIA</h2>
                        <p className={styles.textCardAreas}>O direito de família é um ramo do direito que trata das relações familiares e dos direitos e deveres dos membros da família. Ele abrange questões como casamento, divórcio, filiação, adoção e guarda dos filhos. Também regula aspectos como alimentos, visitas e partilha de bens em caso de separação. O objetivo principal do direito de família é garantir a proteção e a harmonia nas relações familiares, buscando o bem-estar dos membros da família e a preservação dos seus direitos e interesses.</p>
                    </div>
                    <div>
                        <h2 className={styles.titleCardAreas}>DIREITO TRIBUTÁRIO</h2>
                        <p className={styles.textCardAreas}>O direito tributário é o ramo do direito que regula as relações entre o Estado e os contribuintes no que diz respeito à arrecadação e fiscalização dos tributos. Ele estabelece as normas e princípios para a criação, cobrança e controle dos impostos, taxas e contribuições. Além disso, abrange a definição dos direitos e deveres dos contribuintes, assim como os procedimentos de contestação e recurso. O objetivo do direito tributário é garantir a justa arrecadação dos tributos, respeitando os princípios constitucionais, promovendo a equidade e a legalidade na relação entre o Estado e os contribuintes.</p>
                    </div>
                    <div>
                        <h2 className={styles.titleCardAreas}>DIREITO EMPRESARIAL</h2>
                        <p className={styles.textCardAreas}>O Direito Empresarial trata de questões relacionadas ao exercício da atividade empresarial, abrangendo tanto as empresas individuais como as sociedades empresariais. Envolve, entre outros aspectos, a constituição de empresas, a elaboração de contratos comerciais, as obrigações fiscais e tributárias, as práticas concorrenciais, a propriedade intelectual, a falência e recuperação judicial, além dos direitos e deveres dos empresários e dos consumidores.</p>
                    </div>
                </div>
                <a href="" className={styles.btnScheduling}>FAZER AGENDAMENTO</a>
            </Wrapper>
        </div>
    )
}