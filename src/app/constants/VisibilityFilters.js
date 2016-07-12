"use strict";
var TodoFilters_1 = require('./TodoFilters');
function showAll() {
    return true;
}
function showCompleted(todo) {
    return todo.completed;
}
function showActive(todo) {
    return !todo.completed;
}
exports.__esModule = true;
exports["default"] = (_a = {},
    _a[TodoFilters_1.SHOW_ALL] = { filter: showAll, type: TodoFilters_1.SHOW_ALL },
    _a[TodoFilters_1.SHOW_COMPLETED] = { filter: showCompleted, type: TodoFilters_1.SHOW_COMPLETED },
    _a[TodoFilters_1.SHOW_ACTIVE] = { filter: showActive, type: TodoFilters_1.SHOW_ACTIVE },
    _a
);
var _a;
//# sourceMappingURL=VisibilityFilters.js.map