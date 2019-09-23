import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //here classes wld be 'red' ,'bold'
    }
    
    return (
        <div className = {classes.Cockpit} >
                <h1 > Hi!! This is my first React App!!! </h1> 
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button className={buttonClass} onClick = {props.toggle} > Toggle name </button>           
        </div>
    );
};

export default cockpit;