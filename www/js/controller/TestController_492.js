define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_492',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 492');
    	$scope.test = TestService.getTest()
    }]);
});
