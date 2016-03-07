define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_556',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 556');
    	$scope.test = TestService.getTest()
    }]);
});
