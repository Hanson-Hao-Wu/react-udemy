import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Hao", age: 28 },
      { name: "Ashsh", age: 29 },
      { name: "Rajat", age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    console.log('switchNameHandler was clicked!');
    //DON'T DO THIS this.state.persons[0].age = 100;
    this.setState({
      persons: [
        { name: "Hao Wu", age: 100 },
        { name: "Ashsh", age: 29 },
        { name: "Rajat", age: 30 }
      ]
    })
  }

  changeNameHandler = (event) => {
    console.log('changeNameHandler was changed!');
    //DON'T DO THIS this.state.persons[0].age = 100;
    this.setState({
      persons: [
        { name: "hao", age: 18 },
        { name: event.target.value, age: 29 },
        { name: "Rajat", age: 30 }
      ]
    })
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    const inlineStyle = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer'
    }
    return (

      /* <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1>
       </header>
       <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
       </p>
     </div>  */
      <div className="app">
        <h1>Hi, I'm a React</h1>
        <button onClick={this.togglePersons} style={inlineStyle}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Loading...</Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changeName={this.changeNameHandler} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }

      </div>
    );
    //return React.createElement('div',null,React.createElement('h1',null, 'Hi, I\'m a React'));
  }
}

export default App;
