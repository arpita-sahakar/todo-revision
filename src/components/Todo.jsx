import React from 'react'

function Todo({ item, todoList, setTodoList }) {

    const toggleBtn = (e) => {
        let newList = todoList.map(el => {
            if (el.id === item.id) {
                return { ...el, compStatus: !el.compStatus }
            }
            else {
                return el
            }
        })
        setTodoList(newList)
    }

    const deleteItem = () => {
        console.log("hey");
        let listAfterDelete = todoList.filter(el => {
            return el.id != item.id

        })
        setTodoList(listAfterDelete);
    }

    return (
        <div>
            <h3 className ={item.compStatus ? "strikeOut" : ""}> {item.text} </h3>
            <button onClick={toggleBtn} type="button">Toggle</button>
            <button onClick={deleteItem} type="button">Delete</button>
        </div>
    )
}

export default Todo
