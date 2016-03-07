define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_341',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 341');
    	$scope.test = TestService.getTest()
    }]);
});
