import { useState } from "react";
import Form from "./components/Form";
import './App.css';
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
 

  return (
    <div >
      <h1>Hello</h1>
      <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} setStatus={setStatus} />
      <TodoList  setTodoList={setTodoList} todoList={todoList} />
    </div >
  );
}

export default App;
