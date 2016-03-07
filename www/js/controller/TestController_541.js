define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_541',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 541');
    	$scope.test = TestService.getTest()
    }]);
});
