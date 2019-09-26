import React, { Component } from 'react';
//classes is just a name can be anything which holds all the css classes from app.css for local ref
//with css modules you can write normall css and make sure it applies only to your component
//It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

    constructor (props) {
        super(props);
        console.log('[App js] constructor');
        //we can also set state here
        //actually creating the state object as below will internally call the constructor 
        //then the super call and then set state
       /*  this.state({
            persons: [
                {id: '1', name: 'Abhilash', age: 28 },
                {id: '2', name: 'Monika', age: 26 },
                {id: '3', name: 'David', age: 19 },
            ],
            showPersons : false
        }); */
    }

    //assigning an object to state property
    state = {
        persons: [
            {id: '1', name: 'Abhilash', age: 28 },
            {id: '2', name: 'Monika', age: 26 },
            {id: '3', name: 'David', age: 19 },
        ],
        showPersons : false
    };

    //lifecycle hook method
    static getDerivedStateFromProps = (props, state) => {
        console.log('[App js] getDerivedStateFromProps called', props);
        return state;
    }

    //lifeycle method
    componentDidMount () {
        console.log('[App js] componentDidMount');
    }

    //update life cycle hook
    shouldComponentUpdate (nextProps, nextState) {
        console.log('[App js] shouldComponentUpdate');
        return true;
    }

    //update life cycle hook
    componentDidUpdate () {
        console.log('[App js] componentDidUpdate');
    }

    nameChangedHandler = (event, personId) => {
        const personIndex = this.state.persons.findIndex(per => {
            return per.id === personId;
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
        console.log('[App js] render called');
        //react returns the JSX code present within the return method
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                    <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}></Persons>     
            );
        }

        return (
        <div className = {classes.App} >
            <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} toggle={this.toggleButtonHandler}></Cockpit>
            {persons} 
        </div>
        );
        //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi I am a React App!!'));
    }
}

export default App;