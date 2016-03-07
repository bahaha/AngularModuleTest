define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_955',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 955');
    	$scope.test = TestService.getTest()
    }]);
});
