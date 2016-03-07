define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_403',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 403');
    	$scope.test = TestService.getTest()
    }]);
});
