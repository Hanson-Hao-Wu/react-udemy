import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: "asdf1asfafsa", name: "Hao", age: 28 },
      { id: "asjsdff123afsa", name: "Ashsh", age: 29 },
      { id: "aa123afsa", name: "Rajat", age: 30 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; //pass by reference. instead of that. make a copy for that

    //const persons = this.state.persons.slice();//alternative way is use spread

    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  changeNameHandler = (event, id) => {
    console.log('changeNameHandler was changed!');
    //DON'T DO THIS this.state.persons[0].age = 100;

    //get and update target person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    //update persons
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const inlineStyle = {
      backgroundColor: 'green',
      border: '1px solid blue',
      color: 'white',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changeName={(event) => this.changeNameHandler(event, person.id)}
            />
          })}
        </div>
      )
      inlineStyle.backgroundColor = 'red';
      inlineStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="app">
          <h1>SalesBuilder</h1>
          <button onClick={this.togglePersons} style={inlineStyle}>
            Toggle Persons
        </button>
          {persons}
        </div>
      </StyleRoot>
    );
    //return React.createElement('div',null,React.createElement('h1',null, 'Hi, I\'m a React'));
  }
}

export default Radium(App);
