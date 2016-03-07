define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_472',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 472');
    	$scope.test = TestService.getTest()
    }]);
});
