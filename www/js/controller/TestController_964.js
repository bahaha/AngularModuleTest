define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_964',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 964');
    	$scope.test = TestService.getTest()
    }]);
});
