import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"

    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length ? props.todos.map((todo) => { return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> }) : "No Todos to Display"
            }
        </div >
    )
}
