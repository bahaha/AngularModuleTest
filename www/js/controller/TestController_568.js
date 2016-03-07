define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_568',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 568');
    	$scope.test = TestService.getTest()
    }]);
});
