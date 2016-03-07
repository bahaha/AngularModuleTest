define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_206',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 206');
    	$scope.test = TestService.getTest()
    }]);
});
