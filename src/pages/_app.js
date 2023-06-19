import Head from "next/head";
import '../stylesGlobal/global.css'

function MyApp({ Component, pageProps }) {
    return (     
        <>
            <Head>
                <title>Advogado previdenciario</title>
                <meta name="robots" content="all" />
                <meta name="description" content="Agafarma - Sua farmácia de confiança para atender às suas necessidades de saúde e bem-estar. Oferecemos uma ampla variedade de medicamentos, produtos de cuidados pessoais e serviços farmacêuticos de qualidade. Nossa equipe dedicada de profissionais farmacêuticos está pronta para fornecer orientação especializada e atendimento personalizado. Conte com a Agafarma para encontrar tudo o que você precisa para cuidar da sua saúde e da sua família. Visite-nos hoje mesmo e experimente o atendimento excepcional que nos tornou uma referência na comunidade." />
                <meta name="keywords" content="farmácia, agafarma, remedios, medicamentos, genéricos, antibióticos, anti-alérgico, xarope, anticoncepcional,fraldas, manipulados, popular, promoção, comprimido, contato, capsula"></meta>
                <meta name="author" content="Agafarma"/>
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
            </Head>
            <Component {...pageProps} />
        </>   
            
    )
}

export default MyApp;
