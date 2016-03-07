define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_101',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 101');
    	$scope.test = TestService.getTest()
    }]);
});
