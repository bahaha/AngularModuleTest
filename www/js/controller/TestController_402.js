define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_402',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 402');
    	$scope.test = TestService.getTest()
    }]);
});
