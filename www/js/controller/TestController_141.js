define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_141',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 141');
    	$scope.test = TestService.getTest()
    }]);
});
