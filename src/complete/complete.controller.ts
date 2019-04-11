import {GetToDoService} from '../manage-list.service';

export default class CompletedListController {
    static $inject = [
        'GetToDoService'
    ]
    list: any;

    constructor(private GetToDoService){
        console.log(this.GetToDoService);
        this.list = this.GetToDoService.completedList;
    }
}
