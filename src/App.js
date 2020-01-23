import React from 'react';
import Tetris from './components/Tetris';
import HomePage from './components/HomePage';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
console.log(window.location.pathname);
function enrutar(){
  
}
const App = () => (
  
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="">
          <HomePage />
        </Route>
        <Route path="/Tetris">
          <Tetris />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;