define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_345',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 345');
    	$scope.test = TestService.getTest()
    }]);
});
