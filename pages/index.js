import Head from 'next/head';

import Header from '../components/Header';
import Main from '../components/Main';
import ParallaxSection from '../components/ParallaxSection';
import Advantages from '../components/Advantages';
import QuemSomos from '../components/QuemSomos';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Refatorando - Onde as idéias saem do papel!</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Refatorando - Onde as idéias saem do papel. Sites responsivos e dinâmicos, com tecnologias de ponta." />
        <meta name="robots" content="all" />
        <meta name="author" content="Refatorando" />
        <meta name="keywords" content="refatorando, tecnologia, site, criador, website, fábrica, software, programa, orçamento, página, web, react, idéias, ideias, Refatorando" />
        <meta property="og:type" content="page" />
        <meta property="og:url" content="https://refatorando.com.br" />
        <meta property="og:title" content="Refatorando" />
        <meta property="og:image" content="http://refatorando.com.br/logo.svg" />
        <meta property="og:description" content="Onde as idéias saem do papel!" />
        <meta property="article:author" content="Refatorando" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="Refatorando" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:description" content="Onde as idéias saem do papel!" />
          
        {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            data-cfasync="false"
            src={`https://www.googletagmanager.com/gtag/js?id=UA-204838861-1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-204838861-1', {
              'custom_map': {'dimension1': 'emailResponsible'}
            });
            gtag('set', 'dimension1', 'gabriel.galdino@code7.com');
            gtag('event', 'email_dimension', {'emailResponsible': 'gabriel.galdino@code7.com'})
            `,
            }}
          />

          <script
            dangerouslySetInnerHtml={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','UA-204838861-1');
              `
            }}
          />
      </Head>

      <Header />
      <Main />

      <ParallaxSection>
        <Advantages />
        <QuemSomos />
      </ParallaxSection>

      <Footer />

    </div>
  )
}
