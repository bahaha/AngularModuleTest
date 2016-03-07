define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_749',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 749');
    	$scope.test = TestService.getTest()
    }]);
});
