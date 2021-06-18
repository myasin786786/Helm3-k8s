import { connect, Head, styled } from "frontity";
import { websiteLink } from "../store/config";

const ComingSoon = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Coming Soon</title>
        {
          data.isStakeFlow ?
            <>
              <link rel="canonical" href={websiteLink + "/antlia-defi"} />
              <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-defi"} />
              <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-defi"} />
            </>
            :
            data.isAntliaExchange ?
              <>
                <link rel="canonical" href={websiteLink + "/antlia-exchange"} />
                <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-exchange"} />
                <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-exchange"} />
              </>
              :
              data.isAntliaBlockchain ?
                <>
                  <link rel="canonical" href={websiteLink + "/antlia-blockchain"} />
                  <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-blockchain"} />
                  <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-blockchain"} />
                </>
                :
                data.isAntliaFaucet ?
                  <>
                    <link rel="canonical" href={websiteLink + "/antlia-faucet"} />
                    <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-faucet"} />
                    <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-faucet"} />
                  </>
                  :
                  data.isAntliaWallet ?
                    <>
                      <link rel="canonical" href={websiteLink + "/antlia-wallet"} />
                      <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-wallet"} />
                      <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-wallet"} />
                    </>
                    :
                    <>
                      <link rel="canonical" href={websiteLink + "/antlia-explorer"} />
                      <link rel="alternate" hreflang="en-US" href={websiteLink + "/antlia-explorer"} />
                      <link rel="alternate" hreflang="x-default" href={websiteLink + "/antlia-explorer"} />
                    </>
        }
      </Head>
      <div className="mainbanner vh-100">
        <Container>
          <div>
            <Title>Coming Soon...</Title>
          </div>
        </Container>
      </div>
    </>
  );
};

export default connect(ComingSoon);

const Container = styled.div`
  width: 100%;  
  max-width: 1140px;
  margin: 0 auto;
  padding: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0 auto;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #fff;
  font-size: 4em;
`;
