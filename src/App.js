import { useEffect, useState } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todoListkey") != null) {
      setTodoList(JSON.parse(localStorage.getItem("todoListkey")));
    }
  }, []);

  const filterResult = () => {
    if (status === "Completed") {
      setFilteredList(
        todoList.filter((el) => {
          return el.compStatus === true;
        })
      );
    } else if (status === "Incomplete") {
      setFilteredList(
        todoList.filter((el) => {
          return el.compStatus === false;
        })
      );
    } else {
      setFilteredList(todoList);
    }
  };

  useEffect(() => {
    filterResult();
  }, [status, todoList]);

  useEffect(() => {
    localStorage.setItem("todoListkey", JSON.stringify(todoList));
  }, [todoList]);



  return (
    <div className="App">
      <h1>Enter your Todo</h1>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        setStatus={setStatus}
      />
      <TodoList setTodoList={setTodoList} todoList={filteredList} />
    </div>
  );
}

export default App;
