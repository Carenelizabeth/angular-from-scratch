export default class ToDoController {
    constructor(GetToDoService){
        this.GetToDoService = GetToDoService
        this.list = this.GetToDoService.toDoList;
        this.test = "Is this working?";
        this.addToList = (item) => this.GetToDoService.addToList(item);
        this.deleteItem = (id) => this.GetToDoService.deleteItem(id);
    }

    static get $inject() {
        return ['GetToDoService'];
    }
}

// ToDoController.$inject = ['getToDoService'];

// export default ToDoController;