import {GetToDoService} from '../manage-list.service';

export default class ToDoController {
    static $inject = [
        'GetToDoService'
    ]
    list: any;
    test: string;
    addToList: (item: any) => any;
    deleteItem: (id: any) => any;

    constructor(private GetToDoService){
        this.list = this.GetToDoService.toDoList;
        this.test = "Is this working?";
        this.addToList = (item) => this.GetToDoService.addToList(item);
        this.deleteItem = (id) => this.GetToDoService.deleteItem(id);
    }

    setList = (item: string): any => {
        this.GetToDoService.toDoList(item)
    }

}