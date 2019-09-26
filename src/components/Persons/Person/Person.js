import React, {Component} from 'react';
import Aux  from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithCssClass';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {

    render () {
        console.log('[Person js] rendering...');
        return (
            <WithClass classes={classes.Person}>
            <p onClick={this.props.click}>I am a Person with name : {this.props.name} and age : {this.props.age} from my own component!!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
    };
}

//this object will hold all the props and their data types for the component 
//so that if someone provides wrong type of prop it can throw the error with expected value
Person.propTypes = {
    click : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number,
    changed : PropTypes.func
}

export default Person;