define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_377',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 377');
    	$scope.test = TestService.getTest()
    }]);
});
