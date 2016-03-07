define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_499',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 499');
    	$scope.test = TestService.getTest()
    }]);
});
