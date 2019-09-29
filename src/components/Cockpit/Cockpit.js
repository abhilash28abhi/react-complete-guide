import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const buttonClickRef = useRef();
    //way to use context in functional component
    const authContext = useContext(AuthContext);

    //react hook for functional components equivalent of componentDidMount + componentDidUpdate
    //getting called for every render cycle of cockpit
    //equivalent for all class based component lifecycle methods
    //to avoid calling useEffect multiple times pass the 2nd arg to the method specifying the array of
    //data on whose change this method should be called
    //we can also have multiple useEffect method for mltiple criteria
    //if empty array is passed then it will run only once during component App creation
    useEffect(() => {
        console.log('[Cockpit.js] useEffect called');
        //to higlight this gets called multiple times
        /* setTimeout(() => {
            alert('');
        }, 1000); */
        //using react ref for clicking the button
        buttonClickRef.current.click();
    }, []);//[props.persons]

    //useEffect();

    const assignedClasses = [];
    let buttonClass = '';
    if (props.showPersons) {
        buttonClass = classes.red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); //here classes wld be 'red' ,'bold'
    }
    
    return (
        <div className = {classes.Cockpit} >
                <h1 > {props.title} </h1> 
                <p className={assignedClasses.join(' ')}>This is really working</p>
                <button ref={buttonClickRef} className={buttonClass} onClick = {props.toggle} > Toggle name </button> 
                {/* <AuthContext.Consumer>
                    {(context) => <button onClick={context.login}>Log In</button>}     
                </AuthContext.Consumer> */}
                <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);