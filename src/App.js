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
                    <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age } changed = { this.nameChangedHandler }/> 
                    <Person name = { this.state.persons[1].name } age = { this.state.persons[1].age } click = { this.switchButtonHandler.bind(this, 'Abhilash!!!') } > My Hobbies are racing </Person> 
                    <Person name = { this.state.persons[2].name } age = { this.state.persons[2].age } />
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