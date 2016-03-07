define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_342',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 342');
    	$scope.test = TestService.getTest()
    }]);
});
