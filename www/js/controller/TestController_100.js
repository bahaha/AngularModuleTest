define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_100',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 100');
    	$scope.test = TestService.getTest()
    }]);
});
