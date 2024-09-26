import { TodoCounter } from "../src/Components/TodoCounter";
import { TodoSearch } from "../src/Components/TodoSearch";
import { TodoList } from "../src/Components/TodoList";
import { TodoItem } from "../src/Components/TodoItem";
import { CreateTodoButton } from "../src/Components/CreateTodoButton";
import "./App.css";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Cortar tomate", completed: true },
  { text: "Cortar zanahoria", completed: false },
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter total={10} completed={8} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
