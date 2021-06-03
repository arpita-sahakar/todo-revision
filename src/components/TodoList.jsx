import React from 'react';
import Todo from "./Todo"


function TodoList({todoList}) {
    return (
        <div>
            {todoList.map(item =>{
                return  <Todo item={item}/>
            })}
           
        </div>
    )
}

export default TodoList
