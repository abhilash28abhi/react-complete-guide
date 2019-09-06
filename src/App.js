import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Abhilash', age: 28 },
            { name: 'Monika', age: 26 },
            { name: 'Yusuf', age: 16 },
        ]
    };

    switchButtonHandler = (newName) => {
        //console.log('Was clicked');
        //DONT DO THIS this.state.persons[1].name='State Changed';
        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Monika', age: 25 },
                { name: 'State Changed', age: 16 },
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: 28 },
                { name: 'Monika', age: 25 },
                { name: 'State Changed', age: 16 },
            ]
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

        return (<div className = "App" >
            <h1 > Hi I am a React App by Abhilash from India!!! </h1> <button style = { buttonStyle }
            onClick = { this.switchButtonHandler.bind(this, 'Anku') } > Switch name </button> <
            Person name = { this.state.persons[0].name }
            age = { this.state.persons[0].age }
            changed = { this.nameChangedHandler }
            /> 
            <Person name = { this.state.persons[2].name }
            age = { this.state.persons[2].age }
            click = { this.switchButtonHandler.bind(this, 'Abhilash!!!') } > My Hobbies are racing </Person> 
            <Person name = "Monika" age = "25" />
            </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I am a React App!!'));
    }
}

export default App;