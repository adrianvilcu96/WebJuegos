import React from 'react';
import Tetris from './components/Tetris/Tetris';
import HomePage from './components/HomePage';
var ruta = window.location.pathname;
var renderizado;
if (ruta === "/") {
  renderizado = <HomePage />;
} else if (ruta === "/Tetris") {
  renderizado = <Tetris />;
}

const App = () => (
  <div className="App">
    {renderizado}
  </div>
);

export default App;