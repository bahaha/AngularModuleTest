define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_482',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 482');
    	$scope.test = TestService.getTest()
    }]);
});
