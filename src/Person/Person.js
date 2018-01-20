import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const personStyle = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }
    //return <p>I am a person! I am {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div className='person' style={personStyle}>
            <p onClick={props.click}>I am {props.name}! I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    )
}

export default Radium(person);