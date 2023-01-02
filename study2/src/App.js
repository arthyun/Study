import React, {useState, useEffect, Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

var funcStyle = 'color:yellow';
var funcId = 0;
function FuncComp(props){
  var numberState = useState(props.initNumber);
  var number = numberState[0]
  var setNumber = numberState[1];

  // var dateState = useState( (new Date()).toLocaleString() );
  // var _date = dateState[0];
  // var setDate = dateState[1];
  var [_date, setDate] = useState( (new Date()).toLocaleString() ); //최신 useState방식

  //side effect(부수효과) +skipping effect추가
  useEffect(() => {
    console.log('%cfunc => useEffect (componentDidMount) ' + (funcId++), funcStyle);
    document.title = number;
    return () => {
      console.log('%cfunc => useEffect return (componentWillUnMount) ' + (funcId++), funcStyle);
    }
  }, []);
  useEffect(() => {
    console.log('%cfunc => useEffect number (componentDidMount & componentDidUpdate) ' + (funcId++), funcStyle);
    document.title = number;
    return () => {
      //console.log('%cfunc => useEffect number return (componentDidMount & componentDidUpdate) ' + (funcId++), funcStyle);
    }
  }, [number]);

  useEffect(() => {
    console.log('%cfunc => useEffect _date (componentDidMount & componentDidUpdate) ' + (funcId++), funcStyle);
    document.title = _date;
    return () => {
      //console.log('%cfunc => useEffect _date return (componentDidMount & componentDidUpdate) ' + (funcId++), funcStyle);
    }
  }, [_date]);

  //useEffect clean up
  // function FriendStatus(props){
  //   const [isOnline, setIsOnline] = useState(null);

  //   useEffect(() => {
  //     function handleStatusChange(status){
  //       setIsOnline(status.isOnline);
  //     }
  //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //     //effect 이후에 어떻게 정리할 것인지 표시.
  //     return function cleanUp(){
  //       ChatAPI.unsubsscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //     }
  //   });
  //   if(isOnline === null){
  //     return 'Loading...';
  //   }
  //   return isOnline ? 'Online' : 'Offline';
  // }

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

var classStyle = 'color:red';
class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toLocaleString()
  }
  UNSAFE_componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState){
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  render(){
    console.log('%cclass => render', classStyle);
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
