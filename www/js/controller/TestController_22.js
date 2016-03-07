define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_22',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 22');
    	$scope.test = TestService.getTest()
    }]);
});
