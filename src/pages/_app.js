import Head from "next/head";
import '../stylesGlobal/reset.css'

function MyApp({ Component, pageProps }) {
    return (     
        <>
            <Head>
                <title>Advogado previdenciario</title>
                <meta name="robots" content="all" />
                <meta name="description" content="AposentaINSS.com - Seu parceiro em advocacia previdenciária e muito mais. Nossos advogados especializados em direito previdenciário estão prontos para ajudar você a garantir seus direitos. Além disso, oferecemos serviços jurídicos abrangentes em diversas áreas do direito. Entre em contato conosco para uma consultoria personalizada e confiável." />
                <meta name="keywords" content="advogados, advocacia previdenciária, direito previdenciário, advocacia, consultoria jurídica, aposentadoria, INSS, direito trabalhista, direito civil, direito de família, direito criminal, direito tributário, direito empresarial, direito do consumidor, direito imobiliário, direito administrativo, direito ambiental, direito internacional, experiência de 10 anos, advogados especializados, assessoria jurídica, consultoria legal, representação legal"></meta>
                <meta name="author" content="AposentaINSS"/>
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
            </Head>
            <Component {...pageProps} />
        </>   
            
    )
}

export default MyApp;
