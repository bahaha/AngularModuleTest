define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_314',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 314');
    	$scope.test = TestService.getTest()
    }]);
});
