import React from 'react'

function Todo({item, todoList, setTodoList}) {

    const toggleBtn = (e) =>{
        let newList = todoList.map(el => {
            if (el.id === item.id){
                return {...el, compStatus : !el.compStatus}
            }
            else {
                return el
            }
        })
        setTodoList(newList)
    }

    return (
        <div>
            <h3 className ={item.compStatus === true ? "strikeOut" : ""}> {item.text} </h3>
            <button onClick={toggleBtn} type="button">toggle</button>
        </div>
    )
}

export default Todo
