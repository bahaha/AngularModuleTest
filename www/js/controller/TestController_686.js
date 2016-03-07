define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_686',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 686');
    	$scope.test = TestService.getTest()
    }]);
});
