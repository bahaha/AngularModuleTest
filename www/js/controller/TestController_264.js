define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_264',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 264');
    	$scope.test = TestService.getTest()
    }]);
});
