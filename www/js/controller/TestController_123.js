define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_123',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 123');
    	$scope.test = TestService.getTest()
    }]);
});
