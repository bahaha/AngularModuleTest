define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_775',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 775');
    	$scope.test = TestService.getTest()
    }]);
});
