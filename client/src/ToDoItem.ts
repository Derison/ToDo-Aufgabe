export class ToDoItem {
    
    private id: string;
    private text: string;
    private done: boolean;

    /**
     * @param id The id of the ToDoItem
     * @param text The text of the ToDoItem
     * @param done The status of the ToDoItem
     */
    constructor(id: string, text: string, done: boolean) {
        this.id = id;
        this.text = text;
        this.done = done;
    }

    /**
     * Edits the text of an ToDoItem
     * 
     * @param {string} text 
     */
    edit(text: string): void {
        this.text = text;
    }

    /**
     * Returns a HTMLDivElement-Object that can be rendered in the frontend
     * 
     * @returns {HTMLDivElement}
     */
    toItem(): HTMLDivElement {
        const element = document.createElement('div');
        element.className = 'todo-item';
        element.innerHTML = `<p>${this.text}</p>`;
        element.id = this.id;
        return element;
    }
    
    /**
     * Returns the ID of the item
     * 
     * @returns {string} 
     */
    getId(): string {
        return this.id;
    }

    /**
     * Toggles the done-status of a ToDo-Item
     * 
     * @returns {boolean}
     */
    switchStatus(): boolean {
        this.done = !this.done;
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

    public static fromJsonString(jsonString: string): ToDoItem[] {
        let obj: any = JSON.parse(jsonString);

        return obj.map((element: any) => {
            return new ToDoItem(element.id, element.text, element.done);
        })
    }
}