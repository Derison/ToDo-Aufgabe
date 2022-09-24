import { ToDoItem } from "./ToDoItem";

export class ToDoList {
    
    list: ToDoItem[] = [];

    /**
     * Adds a new undone item to the ToDoList
     * 
     * @param {ToDoItem} item 
     */
    addItem(item: ToDoItem): void {
        this.list.push(item);
        // localStorage.setItem('todo-list', JSON.stringify(this.list));
        this.renderList();
    }

    /**
     * Renders the ToDoList to the frontend
     */
    renderList(): void {
        const doneHtml = document.getElementById('done-items');
        const undoneHtml = document.getElementById('undone-items');

        if (!doneHtml || !undoneHtml) {
            throw 'Missing divs';
        }

        doneHtml.innerHTML = "";
        undoneHtml.innerHTML = "";

        this.list.forEach((item: ToDoItem, index: number) => {
            if (item.isDone()) {
                doneHtml?.append(item.toItem(index));
                return;
            }

            undoneHtml?.append(item.toItem(index));
            return;
        })
    }

    /**
     * Returns a filtered list of all undone ToDo-Items
     * 
     * @returns {ToDoItem[]}
     */
    getUndoneToDos(): ToDoItem[] {
        return this.list.filter((item: ToDoItem) => !item.isDone());
    }

    /**
     * Returns a filtered list of all done ToDo-Items
     * 
     * @returns {ToDoItem[]}
     */
    getDoneToDos(): ToDoItem[] {
        return this.list.filter((item: ToDoItem) => item.isDone());
    }
}