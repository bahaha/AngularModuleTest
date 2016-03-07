define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_703',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 703');
    	$scope.test = TestService.getTest()
    }]);
});
