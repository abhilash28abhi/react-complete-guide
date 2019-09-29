import React, {Component} from 'react';
import Aux  from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithCssClass';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor (props) {
        super(props);
        //using react Refs for referencing dom elements
        this.inputElementRef = React.createRef();
    }

    //to access context in places where you cannot wrap it on other component more flexible
    //than using consumer or producer syntax
    static contextType = AuthContext;

    componentDidMount () {
        //to focus on the current react element ie the last one to be rendered
        this.inputElementRef.current.focus();
        console.log('context ', this.context.authenticated);
    }

    render () {
        console.log('[Person js] rendering...');
        return (
            <WithClass classes={classes.Person}>
            {/* <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated</p>: <p>Please login!!</p>}
            </AuthContext.Consumer> */}
            {this.context.authenticated ? <p>Authenticated</p>: <p>Please login!!</p> }
            <p onClick={this.props.click}>I am a Person with name : {this.props.name} and age : {this.props.age} from my own component!!</p>
            <p>{this.props.children}</p>
            <input ref={this.inputElementRef} type="text" onChange={this.props.changed} value={this.props.name}/>
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