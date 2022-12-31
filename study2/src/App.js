import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function FuncComp(props){
  return(
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber
  }
  render(){
    return(
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input type='button' value='random' onClick={() => {
          this.setState({number: Math.ceil(Math.random() * 10)});
        }}></input>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

export default App;
