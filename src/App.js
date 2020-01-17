import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {add,take} from './actions';
import {say} from './actions/speak';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const log = useSelector(state => state.log);
  const dispatch = useDispatch();
  
  console.log(log);
  return (
    <div className="App">
      <header className="App-header">
      {counter}
      <button type="button" onClick={() => {dispatch(add(5)); dispatch(say("fuck you cunt")) }} className="btn btn-primary">+</button>
      <button type="button" onClick={() => dispatch(take(10))} className="btn btn-primary">-</button>
      </header>
    </div>
  );
}

export default App;
