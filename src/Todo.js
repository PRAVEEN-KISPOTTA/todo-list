import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [], // Initialize todos as an empty array
      inputValue: "" // Add inputValue to store the value of the input field
    };
    this.listRef = React.createRef();
  }

  clearInput = () => {
    this.setState({ inputValue: "" }); // Update the inputValue in the state
  };

  eventHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const newTodo = this.listRef.current.value;
    if (newTodo !== "") {
      // Add the new todo to the todos array
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo]
      }));
    }
    this.clearInput();
  };

  render() {
    const { todos, inputValue } = this.state; // Destructure todos and inputValue from the state

    return (
      <div className="container">
        <h1>TODO LIST</h1>
        <form className="input" onSubmit={this.eventHandler}>
          <input
            placeholder="What do you want to do"
            value={inputValue} // Set the value of the input field to inputValue from the state
            ref={this.listRef}
            onChange={(event) => this.setState({ inputValue: event.target.value })} // Update the inputValue in the state on change
          />
          <button type="submit">Add</button>
          <p></p>
        </form>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Todo;
