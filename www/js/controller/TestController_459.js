define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_459',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 459');
    	$scope.test = TestService.getTest()
    }]);
});
