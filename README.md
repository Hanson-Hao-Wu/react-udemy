# react-udemy
### 3.29 Understanding JSX ###

	return React.createElement('div',null,React.createElement('h1',null, 'Hi, I\'m a React'));

### 3.30 JSX Restriction ###

1. class cannot be use in the JSX. replaced by **className**
2. Wrap everything into one root element



### 3.31 Create A Functional Component ###
	import React from 'react';
	
	const person = () => {
	    return <p>I am a person!</p>
	}
	
	export default person;

	import Person from './Person/Person';

**Why import is uppercase?**

### 3.32 Working With Component and Re-Use Them ###


### 3.33 Outputting Dynamic Content  ###

variable in the JSX {}

### 3.35 Working With Props ###

### 3.36 Understanding the Children Property ###


### 3.37 Understanding & Use State ###

state is defined in the Component.
if the value in state changes. the component will re-render the jsx

### 3.38 Props & State ###

props  and state  are CORE concepts of React. Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser (a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

Props

props  allow you to pass data from a parent (wrapping) component to a child (embedded) component.


State

Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

Whenever state  changes (taught over the next lectures), the component will re-render and reflect the new state. The difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from outside!


### 3.39 Handle the Event With Method ###

### 3.40 To Which Events Can You Listen? ###

### 3.41 Manipulating the State ###


### 3.42 Functional (Stateless) vs class (Stateful) Components ###

Try to use the functional component as more as possible.

Container: for the component which extends Component and could have state


### 3.43 Passing Method References Between Components ###

App.js

	<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}/>

Person.js

	onClick={props.click}

### 3.44 Adding Two Way Binding ###

Person.js

	<input type="text" onChange={props.changeName} value={props.name} />


### 3.45 Adding Styling with Stylesheets ###

Person.js

	import './Person.css'


### 3.46 Working with Inline Styles ###

App.js

	const inlineStyle = {
      backgroundColor: 'white',
      border: '1px solid blue',
      cursor: 'pointer'
    }

	<button style={inlineStyle}>

### Assignment ###

Follow the instructions explained in the problem video and try to implement a solution on your own. Compare it with my solution (video + downloadable files) thereafter.

The instructions are:

    Create TWO new components: UserInput and UserOutput
    UserInput should hold an input element, UserOutput two paragraphs
    Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    Pass a username (of your choice) to UserOutput via props and display it there
    Add state to the App component (=> the username) and pass the username to the UserOutput component
    Add a method to manipulate the state (=> an event-handler method)
    Pass the event-handler method reference to the UserInput component and bind it to the input-change event
    Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    Add two-way-binding to your input (in UserInput) to also display the starting username
    Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

## Section: 4 Working with Lists and Conditionals ##

### Section 4, Lecture 48 Module Introduction ###

### Section 4, Lecture 49 Rendering Content Conditionally ###

	{this.state.showPersons === true ?
		<div>
			<Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Loading...</Person>
			<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changeName={this.changeNameHandler} />
			<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
		</div> : null
	}

### Section 4, Lecture 50 Handling Dynamic Content "The JavaScript Way" ###


























# Part 1: ReactJS Fundamentals #

## Lesson 1: Creating Your React ToolChain ##

### 1.1 Understand the requirements of your toolchain ###

JSX to JS

https://caniuse.com/

https://babeljs.io/
es6 -> es5

https://webpack.github.io/

### 1.2 use NPM to manage your application's dependencies and run tasks ###

 

### 1.3 Compile es6 to es5 with Babel ###

### 1.4 Bundle applications with webpack ###

### 1.5 Understand how babel and webpack work together & create a basic build process ###

### 1.6 Create a development optimized build process ###


### 1.7 Create a production optimized build process ###


## Lesson 2: Understanding Adevanced JS Required for ReactJS ##

### 2.1 Use functional programming in JS ###


- forEach
- map
- filter
- reduce

### 2.3 Control execution context with bind / call /apply ###

- bind
- call
- apply



### Understand execution context and the this keyword ###



## Lesson 3: Utilizing ES6 in Your React Application ##

### 3.1 ES6 features ###

- template string ``
- default value add(x, y=5)
- rest spread
- **Default + Rest + Spread**
- arrow function
- Destructuring
- module
- classes
- promises
	- event loop happen in order
	- promise chain
- fetch




### ECMAScript 6 Features ###

https://github.com/lukehoban/es6features



## Lesson 4: Understanding Basic React Concepts ##

4.1 Utilize component based design



4.2 use one way data flow and rendering


## Lesson 5: Understanding the Virtual DOM ##

5.1 Understand the virtual DOM versus the actual DOM


5.2 Understand the diffing algorithm






## Lesson 6: Coding Your First React App with Traditional React ##

6.1 Use createClass and render

    npm install -g create-react-app
    create-react-app my-app
    
    cd my-app
    npm start

6.2 Understand JSX

return an element


6.3 setup initial state


## Lesson 7: React Fundamentals with New ES6 Syntax ##

Install create component

    npm install -g react-create
    
    react-create component Home --entry

7.1 Create with new es6 class syntax



7.2 understand properties versus state & set initial state through es6, and binding this

	this.addUser.bind(this);

7.3 adding new state to an app

7.4 State changes through children components

7.5 Use inputs with react


7.6 adding new state to an app

7.7 Utilize data fetching in react applications

7.8 understand react component life cycle methods

7.9 utilize content to custom components

7.10 Understand higher order components



7.11 utilize prop types

7.12 Utilize ref to access child components




## Lesson 8: React Performance ##


# Part 2: Advanced ReactJS #


## Lesson 9: Creating Routes for Your App with React Router ##
## Lesson 10: Managing Application State with Flux ##
## Lesson 11: Managing Application State with Redux ##
## Lesson 12: Testing ##


