define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_125',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 125');
    	$scope.test = TestService.getTest()
    }]);
});
