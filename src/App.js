import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Form} from "react-bootstrap";
import Cards from './Components/Cards'
import Forms from './Components/Forms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Alert variant="danger"></Alert> */}
        
        <p>
        <Cards></Cards>
        </p>
        <Forms></Forms>
      </header>
    </div>
  );
}

// function getWeatherAPI() {
//   return fetch (
//     "http://api.openweathermap.org/data/2.5/weather?zip=78705,us&appid=44c09e1b007fddbe29f4d406bc2efec3"
//   )
// };

// getWeatherAPI.then((data) => {
//   console.log(data)
// });

export default App;
