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

    const handleDelete = (id: number): void => {
        let removeIdx: number = items.findIndex((item) => item.id === id);
        let newItems = Array<TodoItems>();
        items.map((item, index) => {
            if (index !== removeIdx) {
                newItems.push(item);
            }
        });
        setItems(newItems);
        console.log("delete");
    }

    return(
        <div>
            <div className="itemForm">
                <input type="text" autoFocus name="itemText" placeholder="Insert your new item here" ref={textRef}></input>
                <button type="button" className="addButton" onClick={() => handleAdd()}>Add</button>
            </div>
            <ToDoItems todoItems={items} handleDelete={handleDelete}/>
        </div>
    ) 
}

export default TodoList;