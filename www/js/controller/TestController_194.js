define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_194',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 194');
    	$scope.test = TestService.getTest()
    }]);
});
