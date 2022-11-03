import React from 'react';
import './App.css';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import data from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
