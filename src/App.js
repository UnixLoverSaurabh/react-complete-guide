import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {

    const [personsState, setPersonsState] = useState({
      persons : [
        {name : "saurabh", age : 24},
        {name : "Shubham", age : 26},
        {name : "Sunil", age : 45}
      ],
      otherState : "This will not be altered"
    });

    const switchNameHandler = () => {
      setPersonsState({
        persons : [
          {name : "Gaurabh", age : 23},
          {name : "Shubham Kumar", age : 26},
          {name : "Sunil Prasad", age : 46}
        ]
      });
    }

    const nameChangeHandler = (event) => {
      setPersonsState({
        persons : [
          {name : "Gaurabh kumar", age : 23},
          {name : "Kumar", age : 26},
          {name : event.target.value, age : 46}
        ]
      });

      console.log(event.target.value);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>

            <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={nameChangeHandler}> This is children under third person </Person>

            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} changed={nameChangeHandler}/>

            <button onClick={switchNameHandler}>Switch name</button>
        </header>
      </div>
    );

};

export default App;
