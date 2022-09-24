import "./css/style.css";
import "./css/index.css";

import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";

const button: HTMLElement | null = document.getElementById("add-button");

const list: ToDoList = new ToDoList();

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

    list.addItem(new ToDoItem(input.value, false, list));
    input.value = "";
});