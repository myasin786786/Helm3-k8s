import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import Footer from "./Footer/Footer";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import AboutUs from "./AboutUs/AboutUs";
import Investment from "./Investment/Investment";
import StakeFlow from "./StakeFlow/StakeFlow";
import Wallet from "./Wallet/Wallet";
import externalCss from "./index.css";
import { ToastContainer } from 'react-toastify';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="stylesheet" href="http://fonts.cdnfonts.com/css/mark-pro" />
        <script id="godaddy-security-s" src="https://cdn.sucuri.net/badge/badge.js" data-s="2008" data-i="63987cb6bd92d0fb84698db056be132c528944a4b5" data-p="r" data-c="l" data-t="g"></script>
        {/* Google Tag Manager (noscript)  */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PD6TLM2" height="0" width="0"
          style="display:none;visibility:hidden"></iframe></noscript> */}
        {/* End Google Tag Manager (noscript) */}
        {/* <script src="https://kit.fontawesome.com/a076d05399.js"></script> */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        {/* <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/> */}
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
        <ToastContainer
          position="top-right"
          autoClose={true}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Switch>
          {/* Add the header of the site. */}
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <AboutUs when={data.isAbout} />
          <Investment when={data.isInvestment} />
          <StakeFlow when={data.isStakeFlow} />
          <Wallet when={data.isWallet} />
          <PageError when={data.isError} />
        </Switch>
        <Footer />
      </Main>

    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

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
