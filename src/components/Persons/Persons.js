import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

//update lifecycle hook method
/* static getDerivedStateFromProps = (props, state) => {
    console.log('Persons js getDerivedStateFromProps called', props);
    return state;
} */

//update lifecycle hook method
//can be used for performance optimization based on logic for when/when not to update the component
//we can extend PureComponent instead of Component if we want to check if all props are updated or not
//in the component; the shouldComponentUpdate will already be implemented in that component by default 
//that we can avoid mulitple checks for props changes
shouldComponentUpdate (nextProps, nextState) {
    console.log('[Persons js] shouldComponentUpdate called');
    if (nextProps.persons !== this.props.persons ||
        nextProps.clicked !== this.props.clicked ||
        nextProps.changed !== this.props.changed) {
        return true;
    } else {
        return false;
    }
}


//update lifecycle hook method
//will be called before updating the state
getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('[Persons js] getSnapshotBeforeUpdate called');
    return {message : 'Before update'};
}

//update lifecycle hook method called after the update is finished, wld be used most of the times
componentDidUpdate (prevProps, prevState, message) {
    console.log('[Persons js] componentDidUpdate called');
    console.log('Message' , message);
}

//lifecycle hook method called during component destruction
componentWillUnmount () {
    console.log('[Persons js] componentWillUnmount called');
}

render () {
    console.log('[Persons js] rendering..');
    return this.props.persons.map((person, index) => {
            return <Person click={() => this.props.clicked(index)} name={person.name} 
            age={person.age} key={person.id} changed={(event) => this.props.changed(event, person.id)}></Person>
         })
    };
}
export default Persons;