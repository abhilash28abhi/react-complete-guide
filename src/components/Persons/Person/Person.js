import React from 'react';
import classes from './Person.css';

const person = (props) => {
    console.log('Person js rendering...');
    return (
        <div className={classes.Person} >
        <p onClick={props.click}>I am a Person with name : {props.name} and age : {props.age} from my own component!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    
}

export default person;