import React, { useState } from "react";
import { TodoForm } from "./todoform";
import { Todo } from "./todo";
import { EditTodoForm } from "./editform";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const id = Math.random().toString(20).substring(1,9);

  const addTodo = (todo) => {
    setTodos([...todos, { id: id, task: todo,  }]);
    // console.log(todos);g
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todos, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));


  return (
    <div className="TodoWrapper">
      <h1> Work hard, sleep hard !</h1>
      <TodoForm addTodo={addTodo} />  
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo key={todo.id} 
          task={todo} 
          toggleComplete={toggleComplete}
          editTodo = {editTodo}
          deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};
