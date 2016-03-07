define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_365',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 365');
    	$scope.test = TestService.getTest()
    }]);
});
