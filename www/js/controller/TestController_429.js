define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_429',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 429');
    	$scope.test = TestService.getTest()
    }]);
});
