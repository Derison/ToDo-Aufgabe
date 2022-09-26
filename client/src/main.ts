import "./css/style.css";
import "./css/index.css";

import { v4 as uuidv4 } from 'uuid';
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";
import axios from "axios";

const list: ToDoList = new ToDoList();

export const fetch = axios.create({
    baseURL: 'http://localhost:3000'
});

const toDoList = await fetch.get('/todolists');

if (!toDoList.data[0]) {
    throw 'no list found';
}
localStorage.setItem('listId', toDoList.data[0]._id);

const itemResponse = await fetch.get('/todoitems');

list.setToDos(ToDoItem.fromJsonString(JSON.stringify(itemResponse.data)));
list.renderList();


const button: HTMLElement | null = document.getElementById("add-button");
if (!button) {
    throw "Button could not be found";
}

/**
 * Button Listener to add a new ToDo-Item
 */
button?.addEventListener("click", () => {
    const input: HTMLInputElement | null = document.getElementById(
        "add-input"
    ) as HTMLInputElement;

    list.addItem(new ToDoItem(uuidv4(), input.value, false));
    input.value = "";
});

