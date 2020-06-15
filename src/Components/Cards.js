import React from 'react';
import {Button} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';


function Cards() {
  return (
      <Jumbotron>
         <h1>Can I Go Run?</h1>
            <p>
              This app will output if it is okay to run outside based on the user's custom weather preferences
            </p>
            <p>
              <Button variant="primary" href="https://github.com/jinhyungkim16/run_weather_app" target="_blank">GitHub Code</Button>
            </p>
      </Jumbotron>
  );
}

export default Cards;