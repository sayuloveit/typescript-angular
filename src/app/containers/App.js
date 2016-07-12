"use strict";
var TodoFilters_1 = require('../constants/TodoFilters');
var todos_1 = require('../todos/todos');
var AppController = (function () {
    function AppController() {
        this.todos = [todos_1.initialTodo];
        this.filter = TodoFilters_1.SHOW_ALL;
    }
    return AppController;
}());
exports.App = {
    templateUrl: 'app/containers/App.html',
    controller: AppController
};
//# sourceMappingURL=App.js.map