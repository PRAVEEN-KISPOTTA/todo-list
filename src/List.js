// import { Component } from "react";
// import { Todo } from "./Todo";

// export class List extends Component {
  
//   render() {
//     return (
//       <div className="list">
//         {this.props.todos.map((todo, i) => (
//           <Todo key={i} todo={todo} onRemove={this.props.onRemove}/>
//         ))}
//       </div>
//     );
//   }
// }

import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo) => (
          <Todo key={todo.text} todo={todo} onRemove={() => this.props.onRemove(todo)} />
        ))}
      </div>
    );
  }
}

