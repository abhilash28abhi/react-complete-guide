import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

//update lifecycle hook method
/* static getDerivedStateFromProps = (props, state) => {
    console.log('Persons js getDerivedStateFromProps called', props);
    return state;
} */

//update lifecycle hook method
shouldComponentUpdate (nextProps, nextState) {
    console.log('Persons js shouldComponentUpdate called');
    return true;
}


//update lifecycle hook method
//will be called before updating the state
getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Persons js getSnapshotBeforeUpdate called');
    return {message : 'Before update'};
}

//update lifecycle hook method called after the update is finished, wld be used most of the times
componentDidUpdate (prevProps, prevState, message) {
    console.log('Persons js componentDidUpdate called');
    console.log('Message' , message);
}

//lifecycle hook method called during component destruction
componentWillUnmount () {
    console.log('Persons js componentWillUnmount called');
}

render () {
    console.log('Persons js rendering..');
    return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)} name={person.name} 
            age={person.age} key={person.id} changed={(event) => this.props.changed(event, person.id)}></Person>
         })
    };
}
export default Persons;