define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_872',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 872');
    	$scope.test = TestService.getTest()
    }]);
});
