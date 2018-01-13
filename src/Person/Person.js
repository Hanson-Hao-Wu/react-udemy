import React from 'react';
import './Person.css'

const person = (props) => {
    //return <p>I am a person! I am {Math.floor(Math.random() * 30)} years old</p>
    

    return (
        <div className='person'>
            <p onClick={props.click}>I am {props.name}! I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>

    )
}

export default person;