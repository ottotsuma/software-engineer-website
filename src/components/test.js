// Complete the following <TodoList> component to display
// todos and allow for adding and removing of todo items
import React, {useReducer, useState} from "react";
 
const initalState = [
    {
      id: 0,
      text: "first message"
    }
  ]
  let number = 0;
const todosReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO": 
          number++
          const newState ={ id: number, text: action.text }
          return [...state, newState]
      case "REMOVE_TODO": 
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          state.splice(i, 1);
        }
        console.log(state)
    }
        return [...state]
      default: return state;
    }
  };
  
 const TodoList = () => {
    const [todos, dispatch] = useReducer(todosReducer, initalState);
    const [message, setMessage] = useState('')
    const updateMessage = (e) => {
        setMessage(e.target.value);
      };

  function addTodo () {
    console.log("add to do")
      dispatch({
          type: "ADD_TODO",
          text: message
      })
  }

  function removeTodo (id) {
      console.log(id)
    dispatch( {
        type: "REMOVE_TODO",
        id
    })
}
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} todo={todo}>
                {todo.text}
                <button onClick={() => removeTodo(todo.id)}>Remove Todo</button>
            </li>
          ))}
        </ul>
      <input
        className="search-bar"
        type="text"
        value={message}
        onChange={updateMessage}
      />
      <button className="search-button" onClick={() => {addTodo() }}>
        Add todo
      </button>
      </div>
    );
  };
  
  export default TodoList;

//  Here at the top of the page it is shown working in react
//  https://ottotsuma.herokuapp.com/story