define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_210',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 210');
    	$scope.test = TestService.getTest()
    }]);
});
