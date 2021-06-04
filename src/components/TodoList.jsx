import React from 'react';
import Todo from "./Todo"


function TodoList({todoList, setTodoList}) {
    return (
        <div>
            {todoList.map(item =>{
                return  <Todo setTodoList={setTodoList} todoList={todoList} item={item}/>
            })}
           
        </div>
    )
}

export default TodoList
