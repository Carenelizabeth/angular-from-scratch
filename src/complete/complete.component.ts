import CompletedListController from './complete.controller';

export const CompleteList = {
    template:`
        <div class='complete-list-container'>
            <h2>Completed Tasks</h2>
            <ul class="completed-task-list">
                <li ng-repeat="item in vm.list" class="completed-list-item">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>`,
    controller: CompletedListController,
    controllerAs: 'vm'
}
