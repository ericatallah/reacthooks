import React from 'react';
import Home from './components/home';
import Filter from './components/filter';
import './styles/bundle.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Home />
      <Filter />
    </div>
  );
}

export default App;
