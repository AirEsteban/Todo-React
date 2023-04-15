import { text } from "node:stream/consumers";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { TodoItems } from "../interfaces/helperInteraces";
import ToDoItems from "./todoItems";

const TodoList = () => {
    const [items, setItems] = useState(new Array<TodoItems>);
    const textRef = useRef<HTMLInputElement | null>(null);

    const getNextItem = (): number => {
        return (items.length === 0) ? 1 : (items[items.length - 1].id + 1);
    }

    const handleAdd = (): void => {
       let newItemText = textRef.current?.value;
        if(!newItemText){
            return;
        }
        let newItem: TodoItems = {
            id: getNextItem(),
            text: newItemText,
            isCompleted: false
        };
        setItems([...items, newItem]);
    }

    useEffect(() => {
        console.log("updating" , items); 
    }, [items]);

    return(
        <div>
            <div className="itemForm">
                <input type="text" autoFocus name="itemText" placeholder="Insert your new item here" ref={textRef}></input>
                <button type="button" className="addButton" onClick={() => handleAdd()}>Add</button>
            </div>
            {
                items.map((item) =>{
                    return <div className="listItem" key={item.id.toString()}>
                                <li id={item.id.toString()}>{item.text}</li><button type="button" className="deleteButton">X</button>
                            </div>
                })
            }
        </div>
    ) 
}

export default TodoList;