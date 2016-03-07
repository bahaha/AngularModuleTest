define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_340',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 340');
    	$scope.test = TestService.getTest()
    }]);
});
