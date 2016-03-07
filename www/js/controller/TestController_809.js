define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_809',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 809');
    	$scope.test = TestService.getTest()
    }]);
});
