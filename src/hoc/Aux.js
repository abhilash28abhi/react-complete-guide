//Aux component acts as a wrapper for another component as react doesn't allow 
//more than 1 root element in a component ie div
//alternatively you can use React.Fragment instead of Aux which comes in within the React package
const aux = (props) => {
return props.children;
}

export default aux;