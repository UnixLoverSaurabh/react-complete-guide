import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name : "saurabh", age : 24},
      {name : "Shubham", age : 26},
      {name : "Sunil", age : 45}
    ],
    otherState : "This will not be altered",
    showPersons: false
  }

  switchNameHandler = () => {
    this.setState( {
        persons : [
          {name : "Gaurabh", age : 23},
          {name : "Shubham Kumar", age : 26},
          {name : "Sunil Prasad", age : 46}
        ]
      });
    }

    nameChangeHandler = (event) => {
      this.setState( {
        persons : [
          {name : "Gaurabh kumar", age : 23},
          {name : "Kumar", age : 26},
          {name : event.target.value, age : 46}
        ]
      });

      console.log(event.target.value);
    }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}> This is children under third person </Person>

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangeHandler}/>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </header>
      </div>
    );
  }
}

export default App;