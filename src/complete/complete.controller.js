class CompletedListController {
    constructor(GetToDoService){
        this.GetToDoService = GetToDoService
        this.list = this.GetToDoService.completedList
    }
}

CompletedListController.$inject = ['GetToDoService'];

export default CompletedListController;