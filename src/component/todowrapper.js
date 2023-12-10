import React, { useState } from "react";
import { TodoForm } from "./todoform";
import { Todo } from "./todo";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { task: todo }]);
    console.log(todos);
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  );
};
