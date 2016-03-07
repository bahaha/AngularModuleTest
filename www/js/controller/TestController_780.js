define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_780',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 780');
    	$scope.test = TestService.getTest()
    }]);
});
