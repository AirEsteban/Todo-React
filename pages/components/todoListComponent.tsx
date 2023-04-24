import axios from "axios";
import { text } from "node:stream/consumers";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { TodoItems } from "../interfaces/helperInteraces";
import ToDoItems from "./todoItems";

const TodoList = () => {
    const [items, setItems] = useState(new Array<TodoItems>);
    const textRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        axios.get("https://localhost:7226/TodoItems/getAll").then(
            (response) => {
                let fetchedItems = new Array<TodoItems>();
                for(let i = 0; i < response.data.length; i++){
                    fetchedItems.push(response.data[i]);
                }
                console.log("items", fetchedItems);
                setItems(fetchedItems);
            }
        ).catch(rejected => Promise.reject("Error fetching data"));
    }, []);

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
            name: newItemText,
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