import React from 'react'

function Form({ setTodo, setTodoList, todo, todoList, setStatus }) {

    const textInInputBox = (e) => {
        setTodo(e.target.value);

    }

    const addToList = (e) => {
        e.preventDefault();
        console.log("hhey")
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    const selectStatus = (e) => {
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <div>
            <input onChange={textInInputBox} type="text"></input>
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
