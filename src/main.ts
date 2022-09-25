import "./css/style.css";
import "./css/index.css";

import { v4 as uuidv4 } from 'uuid';
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";

const button: HTMLElement | null = document.getElementById("add-button");

const list: ToDoList = new ToDoList();

const preStoredItems: string|null = localStorage.getItem('list');

if (preStoredItems) {
    list.setToDos(ToDoItem.fromJsonString(preStoredItems));
    list.renderList();
}

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