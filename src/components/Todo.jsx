import React from 'react'

function Todo({item, todoList, setTodoList}) {

    const compOrnot = (e) =>{
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
            <h3> {item.text} </h3>
            <button onClick={compOrnot} type="button">toggle</button>
        </div>
    )
}

export default Todo
