import './App.css';
import React from "react";
import Home from './pages/Home'

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hi</h1>
      <Home />

      {/* Home (the one with the search on) */}

      {/* SearchPage (the results page) */}

    </div>
  );
}

export default App;
