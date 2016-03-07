define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_292',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 292');
    	$scope.test = TestService.getTest()
    }]);
});
