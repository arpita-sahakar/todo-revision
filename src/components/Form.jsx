import React from "react";



function Form({ setTodo, setTodoList, todo, todoList, setStatus}) {

    const textInInputBox = (e) => {
        setTodo(e.target.value);

    }

    const addToList = (e) => {
        e.preventDefault();
        setTodoList([...todoList, { id: Math.floor(Math.random() * 1000), compStatus : false, text: todo }]);
        setTodo("");
    }


    const selectStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <div>
            <input onChange={textInInputBox} value={todo} type="text"></input>
            <button onClick={addToList} type="submit">+</button>
            <select onChange={selectStatus} name="cars" id="cars">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incomplete">incomplete</option>
            </select>
        </div>
    )
}

export default Form
