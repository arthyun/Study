import styled from 'styled-components';

const HomeWrap = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 2rem;
  box-sizing: border-box;
  border: 2px solid #fff;
  transition: all 0.3s;

  &:hover {
    border: 15px solid #fff;
  }

  & .first {
    color: red;
  }
  & .second {
    color: aqua;
  }
  & .third {
    color: green;
  }
  .forth {
    color: yellow;
  }
  .fifth {
    color: purple;
  }
  .six {
    color: beige;
  }
  .outsideWrap & {
    background-color: #555;
  }
`;

const Home = () => {
  return (
    <div className="outsideWrap">
      <HomeWrap as="section">
        <h1 className="first">Welcome Home</h1>
        <h2 className="second">Welcome Home</h2>
        <h3 className="third">Welcome Home</h3>
        <h4 className="forth">Welcome Home</h4>
        <h5 className="fifth">Welcome Home</h5>
        <h6 className="six">Welcome Home</h6>
      </HomeWrap>
    </div>
  );
};

export default Home;
