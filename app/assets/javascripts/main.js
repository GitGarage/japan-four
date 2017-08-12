//= require_self
//= require_tree ./angular

var app = angular.module('app', ['ngResource', 'ngRoute', 'ngSanitize', 'ngDragDrop', 'ui.bootstrap']);

app.factory('get_words', ['$resource', function ($resource) {
    return $resource('/main/get_words');
}]);

app.factory('save_words', ['$resource', function ($resource) {
    return $resource('/main/save_words');
}]);