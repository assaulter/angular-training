'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
  var controller = this;
  controller.todos = [
    {title: 'タスク１', done: false},
    {title: 'タスク２', done: true},
  ];

  controller.addTodo = function(newTodo) {
    console.log(newTodo);
    controller.todos.push({
      title: newTodo.title, done: false
    });
  };
}]);
