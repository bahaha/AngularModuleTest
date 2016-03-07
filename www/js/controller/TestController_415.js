define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_415',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 415');
    	$scope.test = TestService.getTest()
    }]);
});
