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
        localStorage.setItem('list', JSON.stringify(this.list));
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

        this.list.forEach((item: ToDoItem) => {
            if (item.isDone()) {
                doneHtml?.append(item.toItem());
                return;
            }

            undoneHtml?.append(item.toItem());
            return;
        })

        document.querySelectorAll('.todo-item').forEach((item: any) => {
            item.addEventListener("click", (event: MouseEvent) => {
                const target: HTMLDivElement|null = event.currentTarget as HTMLDivElement;
                this.findItem(target.id)?.switchStatus();
                localStorage.setItem('list', JSON.stringify(this.list));
                this.renderList();
            });
        });
    }

    /**
     * Sets a list of ToDoItems as list
     * 
     * @param {ToDoItem[]} items 
     */
    setToDos(items: ToDoItem[]) {
        this.list = items;
    }

    /**
     * Returns an object by its ID
     * 
     * @param {stirng} id 
     * @returns {ToDoItem|undefined}
     */
    findItem(id: string): ToDoItem|undefined {
        return this.list.find((item: ToDoItem) => item.getId() === id);
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