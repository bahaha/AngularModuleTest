define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_941',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 941');
    	$scope.test = TestService.getTest()
    }]);
});
