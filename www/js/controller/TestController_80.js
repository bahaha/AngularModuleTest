define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_80',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 80');
    	$scope.test = TestService.getTest()
    }]);
});
