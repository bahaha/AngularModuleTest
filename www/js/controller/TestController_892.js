define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_892',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 892');
    	$scope.test = TestService.getTest()
    }]);
});
