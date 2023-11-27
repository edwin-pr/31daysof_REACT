const element11 = <h1>Hello, world!</h1>;
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
// Example with embedded expression
const name = "John";
const element2 = <p>Hello, {name}!</p>;

// Example with attributes
const element0 = <img src="path/to/image.jpg" alt="Description" />;

// JSX element representing a React component
const element3 = <MyComponent />;

// A simple React component using JSX
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>This is a JSX component.</p>
      </div>
    );
  }
}
