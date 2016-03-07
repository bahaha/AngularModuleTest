define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_777',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 777');
    	$scope.test = TestService.getTest()
    }]);
});
