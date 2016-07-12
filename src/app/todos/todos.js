"use strict";
var assign_1 = require('../assign');
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
exports.initialTodo = {
    text: 'Use AngularJS',
    completed: false,
    id: 0
};
var TodoService = (function () {
    function TodoService() {
    }
    TodoService.prototype.addTodo = function (text, todos) {
        return [
            {
                id: (todos.length === 0) ? 0 : todos[0].id + 1,
                completed: false,
                text: text
            }
        ].concat(todos);
    };
    TodoService.prototype.completeTodo = function (id, todos) {
        return todos.map(function (todo) {
            return todo.id === id ?
                assign_1.assign({}, todo, { completed: !todo.completed }) :
                todo;
        });
    };
    TodoService.prototype.deleteTodo = function (id, todos) {
        return todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoService.prototype.editTodo = function (id, text, todos) {
        return todos.map(function (todo) {
            return todo.id === id ?
                assign_1.assign({}, todo, { text: text }) :
                todo;
        });
    };
    TodoService.prototype.completeAll = function (todos) {
        var areAllMarked = todos.every(function (todo) { return todo.completed; });
        return todos.map(function (todo) { return assign_1.assign({}, todo, { completed: !areAllMarked }); });
    };
    TodoService.prototype.clearCompleted = function (todos) {
        return todos.filter(function (todo) {
            return todo.completed === false;
        });
    };
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todos.js.map