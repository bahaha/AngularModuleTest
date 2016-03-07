define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_498',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 498');
    	$scope.test = TestService.getTest()
    }]);
});
