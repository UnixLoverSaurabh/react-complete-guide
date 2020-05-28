import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons : [
      {name : "saurabh", age : 24},
      {name : "Shubham", age : 26},
      {name : "Sunil", age : 45}
    ],
    otherState : "This will not be altered"
  }

  switchNameHandler = () => {
    // DON'T DO THIS : this.state.persons[0].name = 'Maximilian';

    this.setState({
      persons : [
        {name : "Gaurabh", age : 23},
        {name : "Shubham Kumar", age : 26},
        {name : "Sunil Prasad", age : 46}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React</h1>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>

            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> This is children under third person </Person>

            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

            <button onClick={this.switchNameHandler}>Switch name</button>
        </header>
      </div>
    );
  }
}

export default App;
