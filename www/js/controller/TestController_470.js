define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_470',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 470');
    	$scope.test = TestService.getTest()
    }]);
});
