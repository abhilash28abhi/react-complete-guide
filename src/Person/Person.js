import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
        <p onClick={props.click}>I am a Person with name : {props.name} and age : {props.age} from my own component!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    
}

export default person;