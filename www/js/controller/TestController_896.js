define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_896',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 896');
    	$scope.test = TestService.getTest()
    }]);
});
