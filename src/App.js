import React from 'react';
import './App.css';
import Person from './Person/Person.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
          <Person name="saurabh" age="24"/>
          <Person name="Shubham" age="26"/>
      </header>
    </div>
  );
}

export default App;
