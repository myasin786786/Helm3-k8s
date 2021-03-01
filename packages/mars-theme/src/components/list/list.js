import { connect, styled, decode } from "frontity";
// import Item from "./list-item";
// import Pagination from "./pagination";
import MainBanner from './../MainBanner/MainBanner';
import AntliaEcosystem from './../AntliaEcosystem/AntliaEcosystem';
import Consensus from './../Consensus/Consensus';
import DevTools from './../DevTools/DevTools';
import Interoperable from './../Interoperable/Interoperable';
import SmartContract from './../SmartContract/SmartContract';
import ANACoin from './../ANACoin/ANACoin';
import TechnicalRoadMap from './../TechnicalRoadmap/TechnicalRoadmap';
import { structuredData } from "../../store/SEO/Homepage/structuredData";

const List = ({ state }) => {
  // Get the data of the current list.
  // const data = state.source.get(state.router.link);

  return (
    <>
     <script className="structured-data-list" type="application/ld+json">
        {structuredData(state)}
      </script>
      <MainBanner />
      <AntliaEcosystem />
      <Consensus />
      <Interoperable />
      <DevTools />
      <SmartContract />
      <ANACoin />
      <TechnicalRoadMap />
      {/* <Footer /> */}
    </>
    // <Container>
    //   {data.isTaxonomy && (
    //     <Header>
    //       {data.taxonomy}:{" "}
    //       <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
    //     </Header>
    //   )}

    //   {data.isAuthor && (
    //     <Header>
    //       Author: <b>{decode(state.source.author[data.id].name)}</b>
    //     </Header>
    //   )}

    //   {data.items.map(({ type, id }) => {
    //     const item = state.source[type][id];

    //     return <Item key={item.id} item={item} />;
    //   })}
    //   <Pagination />
    // </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
