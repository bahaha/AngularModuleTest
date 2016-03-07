define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_847',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 847');
    	$scope.test = TestService.getTest()
    }]);
});
