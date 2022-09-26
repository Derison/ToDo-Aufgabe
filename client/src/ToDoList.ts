import { fetch } from "./main";
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
        fetch.post('/todoitems', {
            text: item.text,
            done: item.done,
            list: localStorage.getItem('listId')
        })
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

        document.querySelectorAll('.todo-item p').forEach((item: any) => {
            item.addEventListener("click", (event: PointerEvent) => {
                const target: HTMLDivElement|null = (<HTMLElement>event.target).parentNode as HTMLDivElement;

                const item: ToDoItem|undefined = this.findItem(target.id);
                if (!item) {
                    throw 'Logical Exception';
                }

                item.switchStatus();

                fetch.patch(`/todoitems/${target.id}`, {
                    _id: item.id,
                    text: item.text,
                    done: item.done
                })
                this.renderList();
            });
        });

        document.querySelectorAll('.edit-todo').forEach((item: any) => {
            item.addEventListener("click", (event: MouseEvent) => {
                const target: HTMLDivElement|null = (<HTMLElement>event.target).parentNode as HTMLDivElement;

                const item: ToDoItem|undefined = this.findItem(target.id);
                if (!item) {
                    throw 'Logical Exception';
                }

                const input: string|null = prompt('Enter new text', item.text);
                
                if (!input) {
                    throw 'Input cannot be empty';
                }

                item.edit(input);
                fetch.patch(`/todoitems/${target.id}`, {
                    _id: item.id,
                    text: input,
                    done: item.done
                })

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