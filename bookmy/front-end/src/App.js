import Header from './Components/Header';
import React from 'react';
import './App.css';
import BsState from './Context/BsState';
import Home from './Pages/Home';


function App() {
  return (
    <>
      <Header />
      <div className="App">
        {/* rest of your components */}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
    <BsState>
    <Home />
  </BsState>
    </div>
  );
}

export default App;
