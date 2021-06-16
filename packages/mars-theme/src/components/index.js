import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./Footer/Footer";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import ComingSoon from "./comingsoon";
import Events from "./Events/Events";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import AboutUs from "./AboutUs/AboutUs";
import Investment from "./Investment/Investment";
import Blog from "./Blog/Blog";
import externalCss from "./index.css";
import { websiteLink } from '../store/config';
import { structuredData } from "../store/SEO/Homepage/structuredData";
import Sitemap from "../components/Sitemap/Sitemap";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // useEffect(() => {
  //   let name = 'antlia-web-frontity'
  //   let version = '1.0.1'
  //   const last_version = localStorage.getItem(`${name}-Version`)
  //   if (!last_version) {
  //     window.location.reload();
  //   }
  //   if (last_version !== version) {
  //     localStorage.setItem(`${name}-Version`, version)
  //     window.location.reload();
  //   }
  // }, [])
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css2?family=Kulim+Park:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"></link>
        {/* <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Varela&display=swap" rel="stylesheet"></link> */}
        <script id="godaddy-security-s" src="https://cdn.sucuri.net/badge/badge.js" data-s="2008" data-i="63987cb6bd92d0fb84698db056be132c528944a4b5" data-p="r" data-c="l" data-t="g"></script>
        <meta name="google-site-verification" content="JNMT9OYXqNMW9jLqclF5kMZ4OlpNiLyLOnwNYOr-pMg" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        <meta name="robots" content="noodp, noydir, index, follow, archive" />
        <meta name="robots" content="max-snippet:50, max-image-preview:large" />
        <link rel="canonical" href={websiteLink} />
        <link rel="alternate" hreflang="en" href={websiteLink} />
        <meta property="og:title" content={state.frontity.title} />
        <meta property="og:description" content={state.frontity.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={websiteLink} />
        <meta property="og:image" content="https://i.imgur.com/El8IXYd.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={state.frontity.title} />
        <meta name="twitter:description" content={state.frontity.description} />
        <meta name="twitter:url" content={websiteLink} />
        <meta name="twitter:image" content="https://i.imgur.com/El8IXYd.png" />
        <script className="structured-data-list" type="application/ld+json">
          {structuredData(state)}
        </script>
      </Head>
      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={css(externalCss)} />
      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <HeadContainer>
          <Header />
        </HeadContainer>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <AboutUs when={data.isAbout} />
          <Investment when={data.isInvestment} />
          <PageError when={data.isError} />
          <ComingSoon when={data.isStakeFlow || data.isAntliaFaucet || data.isAntliaWallet || data.isAntliaExplorer || data.isAntliaBlockchain || data.isAntliaExchange} />
          <Blog when={data.isBlog} />
          <Sitemap when={data.isSitemap} />
          <Events when={data.isEvents} />
          <PrivacyPolicy when={data.isPrivacy} />
        </Switch>
        <Footer props={state.router.link} />
      </Main>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
