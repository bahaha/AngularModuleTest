define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_441',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 441');
    	$scope.test = TestService.getTest()
    }]);
});
