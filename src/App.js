import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";
import Cards from './Components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="danger"></Alert>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Cards></Cards>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
