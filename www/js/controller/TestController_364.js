define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_364',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 364');
    	$scope.test = TestService.getTest()
    }]);
});
