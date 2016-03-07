define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_362',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 362');
    	$scope.test = TestService.getTest()
    }]);
});
