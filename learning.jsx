const element11 = <h1>Hello, world!</h1>;
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
// Example with embedded expression
const name = "John";
const element2 = <p>Hello, {name}!</p>;

// Example with attributes
const element = <img src="path/to/image.jpg" alt="Description" />;
