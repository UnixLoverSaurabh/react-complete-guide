import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id: 1, name : "saurabh", age : 24},
      {id: 2, name : "Shubham", age : 26},
      {id: 3, name : "Sunil", age : 45}
    ],
    otherState : "This will not be altered",
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
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
          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} key={person.id}/>
          })}
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