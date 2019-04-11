import {toDoList} from  './todo/todo.component';
import {CompleteList} from './complete/complete.component';
import {GetToDoService} from './manage-list.service';
import angular from 'angular';

//console.log(GetToDoService);

angular.module('App', [])
    .service('GetToDoService', GetToDoService)
    .component('toDoList', toDoList)
    .component('completeList', CompleteList)

