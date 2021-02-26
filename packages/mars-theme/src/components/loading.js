import { styled, keyframes, css } from "frontity";

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

const Loading = () => (
  <div className="start-loader">
  <div className="loader-in">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <img src="https://i.imgur.com/Ql9Tpxm.png" alt="Antlia" />
  </div>
</div>
  // <Container>
  //   <div>
  //     <div css={bar(1)} />
  //     <div css={bar(2)} />
  //     <div css={bar(3)} />
  //     <div css={bar(4)} />
  //     <div css={bar(5)} />
  //   </div>
  // </Container>
);

export default Loading;

const bar = (index) => css`
  background-color: #000;
  width: 4px;
  height: 24px;
  margin: 3px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite
    cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

const Container = styled.div`
  background-color: #000; 
  width: 800px;
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > * {
    margin-top: 24px;
  }
`;
