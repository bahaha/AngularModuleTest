define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_376',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 376');
    	$scope.test = TestService.getTest()
    }]);
});
