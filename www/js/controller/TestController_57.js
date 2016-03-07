define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_57',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 57');
    	$scope.test = TestService.getTest()
    }]);
});
