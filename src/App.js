import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Abhilash', age: 28 },
            { name: 'Monika', age: 26 },
            { name: 'David', age: 16 },
        ],
        showPersons : false
    };

    switchButtonHandler = (newName) => {
        //console.log('Was clicked');
        //DONT DO THIS this.state.persons[1].name='State Changed';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Monika', age: 25 },
                { name: 'David', age: 16 },
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'Monika', age: 25 },
                { name: 'David', age: 16 },
            ]
        });
    }

    toggleButtonHandler = () => {
        const toggleButton = this.state.showPersons;
        this.setState({
            showPersons : !toggleButton
        });
    }

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex,1);
        this.setState({
            persons : persons
        });
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };


        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                       return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}></Person>
                    })}
                </div>      
            );
        }

        return (
        <div className = "App" >
            <h1 > Hi I am a React App by Abhilash from India!!! </h1> 
            <button style = { buttonStyle } onClick = {this.toggleButtonHandler} > Toggle name </button>           
                {persons} 
        </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I am a React App!!'));
    }
}

export default App;