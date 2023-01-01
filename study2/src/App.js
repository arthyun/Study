import React, {useState, Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0]
  var setNumber = numberState[1];

  // var dateState = useState( (new Date()).toLocaleString() );
  // var _date = dateState[0];
  // var setDate = dateState[1];
  var [_date, setDate] = useState( (new Date()).toLocaleString() ); //최신 useState방식

  return(
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type='button' value='random' onClick={() => {
        setNumber( Math.floor(Math.random() * 11) ) }} />
      <input type='button' value='date' onClick={() => {
        setDate( (new Date()).toLocaleString() ) }} />
    </div>
  );
}

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toLocaleString()
  }
  render(){
    return(
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type='button' value='random' onClick={function(){
          this.setState( {number: Math.ceil(Math.random() * 10)} );
        }.bind(this)} />
        <input type='button' value='date' onClick={function(){
          this.setState( {date: (new Date()).toLocaleString()} );
        }.bind(this)} />
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
