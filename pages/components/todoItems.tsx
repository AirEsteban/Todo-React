import { useState } from "react";
import { TodoItems } from "../interfaces/helperInteraces"

const ToDoItems = (props: {todoItems: Array<TodoItems>, handleDelete: (id: number) => void})  => {   
    return(
        <ul className="uList">
            {
                props.todoItems.map((item) =>{
                    return <div className="listItem" key={item.id.toString()}>
                                <li id={item.id.toString()}>{item.text}</li><button type="button" onClick={() => props.handleDelete(item.id)} className="deleteButton">X</button>
                            </div>
                })
            }
        </ul>
    )
}

export default ToDoItems;