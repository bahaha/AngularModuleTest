define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_464',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 464');
    	$scope.test = TestService.getTest()
    }]);
});
