define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_641',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 641');
    	$scope.test = TestService.getTest()
    }]);
});
