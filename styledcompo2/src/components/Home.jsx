import styled from 'styled-components';

const HomeWrap = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 300px;
  border: 2px solid #fff;

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
      <HomeWrap>
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
