define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_323',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 323');
    	$scope.test = TestService.getTest()
    }]);
});
