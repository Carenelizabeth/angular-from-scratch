import toDoController from './todo.controller';

export const toDoList = {
    template: `
        <div class='todo-list-container'>
            <h1>To Do</h1>
            <p>{{vm.logList()}}</p>
            <p>{{vm.test}}</p>
            <ng-transclude></ng-transclude>
            <ul class="to-do-list">
                <li ng-repeat="item in vm.list" class="list-item">
                    <p>{{item.title}}    <button ng-click="vm.deleteItem(item.id)">X</button></p>
                </li>
            </ul>
            <p><input ng-model="vm.newList" type="text"/></p>
            <button ng-click="vm.addToList(vm.newList)">Add New</button>
        </div>`,
    controller: toDoController,
    controllerAs: 'vm',
    transclude: true,
}

