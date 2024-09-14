import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function MapTodos() {
  const todos = useSelector((state) => state.todos);
  const dispath = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{todo.text}</div>
          <button onClick={() => dispath(removeTodo(todo.id))}>Delete</button>
          <button onClick={() => dispath(updateTodo(todo.id))}>update</button>
        </li>
      ))}
    </ul>
  );
}

export default MapTodos;
