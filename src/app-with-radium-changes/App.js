import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
//radium library is used to have pseudo selectors with inline styles
//Styleroot component is used where media queries are used to wrap the entire app with that
//its not required for pseduo selectors

class App extends Component {
    //assigning an object to state property
    state = {
        persons: [
            {id: '1', name: 'Abhilash', age: 28 },
            {id: '2', name: 'Monika', age: 26 },
            {id: '3', name: 'David', age: 19 },
        ],
        showPersons : false
    };

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(per => {
            return per.id===personId;
        });
        
        //create a new person object to avoid mutating the original person's state
        //this will return the person object whose value needs to be modified
        const person = {
            ...this.state.persons[personIndex]
        };
        
        //update the person name of the copied person object
        person.name = event.target.value;
        //get all the person objects
        const persons = [...this.state.persons]; //or use slice()
        //replace the modified person object in the object
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    toggleButtonHandler = () => {
        const toggleButton = this.state.showPersons;
        this.setState({
            showPersons : !toggleButton
        });
    }

    deletePersonHandler = (personIndex) => {
        //slice will create a copy of original array object; state of an object should be updated in immutable way
        //const persons = this.state.persons.slice();
        //using ES6 spread operator approach
        const persons = [...this.state.persons];
        //splice will delete elements from the array object
        persons.splice(personIndex,1);
        this.setState({
            persons : persons
        });
    }

    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover' : {
                backgroundColor : 'lightgreen',
                color : 'black'
            }
        };

        //react returns the JSX code present within the return method
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                       return <Person click={() => this.deletePersonHandler(index)} name={person.name} 
                       age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
                    })}
                </div>      
            );
            buttonStyle.backgroundColor = 'red';
            buttonStyle[':hover'] = {
                backgroundColor : 'salmon',
                color : 'black'
            }
        }

        const classNames = [];
        if (this.state.persons.length <= 2) {
            classNames.push('red');
        }
        if (this.state.persons.length <= 1) {
            classNames.push('bold'); //here classes wld be 'red' ,'bold'
        }


        return (
        <StyleRoot>
        <div className = "App" >
            <h1 > Hi!! This is my first React App!!! </h1> 
            <p className={classNames.join(' ')}>This is really working</p>
            <button style = { buttonStyle } onClick = {this.toggleButtonHandler} > Toggle name </button>           
                {persons} 
        </div>
        </StyleRoot>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I am a React App!!'));
    }
}

export default Radium(App);