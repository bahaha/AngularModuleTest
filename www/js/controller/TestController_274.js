define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_274',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 274');
    	$scope.test = TestService.getTest()
    }]);
});
