import { ToDoList } from "./ToDoList";

export class ToDoItem {
    
    private text: string;
    private done: boolean;
    private list: ToDoList;

    /**
     * @param text The text of the ToDoItem
     * @param done The status of the ToDoItem
     */
    constructor(text: string, done: boolean, list: ToDoList) {
        this.text = text;
        this.done = done;
        this.list = list;
    }

    /**
     * Returns a HTMLDivElement-Object that can be rendered in the frontend
     * 
     * @param {number} index
     * @returns {HTMLDivElement}
     */
    toItem(index: number): HTMLDivElement {
        const element = document.createElement('div');
        element.className = 'todo-item';
        element.innerHTML = `<p>${this.text}</p>`;
        element.id = String(index);
        element.addEventListener("click", (event: MouseEvent) => {
            const target: HTMLDivElement|null = event.currentTarget as HTMLDivElement;

            if (!target) {
                throw 'Logic Exception';
            }
    
            const id: number = Number(target.id);
            this.list.list[id].switchStatus();
        });
        return element;
    }
    
    /**
     * Toggles the done-status of a ToDo-Item
     * 
     * @returns {boolean}
     */
    switchStatus(): boolean {
        this.done = !this.done;
        this.list.renderList();
        return this.done;
    }

    /**
     * Returns the Done-status of a ToDo-Item
     *  
     * @returns {boolean}
     */
    isDone(): boolean {
        return this.done;
    }
}