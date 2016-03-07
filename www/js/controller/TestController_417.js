define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_417',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 417');
    	$scope.test = TestService.getTest()
    }]);
});
