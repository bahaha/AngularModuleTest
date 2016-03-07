define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_992',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 992');
    	$scope.test = TestService.getTest()
    }]);
});
