define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_710',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 710');
    	$scope.test = TestService.getTest()
    }]);
});
