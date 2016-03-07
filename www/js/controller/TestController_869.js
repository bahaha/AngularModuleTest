define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_869',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 869');
    	$scope.test = TestService.getTest()
    }]);
});
