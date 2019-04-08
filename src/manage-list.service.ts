export class GetToDoService {
    toDoList: { id: number; title: string; }[];
    completedList: { id: number; title: string; }[];
    constructor(){
        this.toDoList = [
            {id: 0, title: 'item 1'},
            {id: 1, title: 'item 2'},
            {id: 2, title: 'item 3'}
        ]

        this.completedList = [{id: 500, title: 'complete'}]
    }

    getList(){
        return this.toDoList;
    }

    addToList(item: string){
        let id = this.toDoList.length > 0 ? this.toDoList[this.toDoList.length-1].id +1: 0;
        let newListItem = {id: id, title: item}
        this.toDoList.push(newListItem)
    }

    deleteItem(id: number){
        for(let i=0; i<this.toDoList.length; i++){
            if(this.toDoList[i].id === id){
                this.completedList.push(this.toDoList[i])
                this.toDoList.splice(i, 1)
                break;
            }
        }
    }
}
