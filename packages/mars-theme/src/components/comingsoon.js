import { styled } from "frontity";

const ComingSoon = () => {
  return (
    <div className="mainbanner vh-100">
      <Container>
        <div>
          <Title>Coming Soon...</Title>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoon;

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
