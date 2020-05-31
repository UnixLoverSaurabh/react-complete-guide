import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js'

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

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                    <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}/>
                  </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;

    }

    const assignedClasses = [];
    if( this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if( this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <header className="App-header">
          <h1>Welcome to React</h1>
            <p className={assignedClasses.join(' ')}>Warning message</p>
            <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
        </header>
      </div>
    );
  }
}

export default App;