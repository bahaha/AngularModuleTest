define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_212',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 212');
    	$scope.test = TestService.getTest()
    }]);
});
