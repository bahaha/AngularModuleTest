define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_469',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 469');
    	$scope.test = TestService.getTest()
    }]);
});
