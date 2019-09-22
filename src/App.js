import React, { Component } from 'react';
//classes is just a name can be anything which holds all the css classes from app.css for local ref
//with css modules you can write normall css and make sure it applies only to your component
//It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you
import classes from './App.css';
import Person from './Person/Person';


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
        //react returns the JSX code present within the return method
        let persons = null;
        let buttonClass = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                       return <Person click={() => this.deletePersonHandler(index)} name={person.name} 
                       age={person.age} key={person.id} changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
                    })}
                </div>      
            );
            buttonClass = classes.red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); //here classes wld be 'red' ,'bold'
        }


        return (
        <div className = {classes.App} >
            <h1 > Hi!! This is my first React App!!! </h1> 
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={buttonClass} onClick = {this.toggleButtonHandler} > Toggle name </button>           
                {persons} 
        </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I am a React App!!'));
    }
}

export default App;