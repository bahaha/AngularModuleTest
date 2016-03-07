define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_913',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 913');
    	$scope.test = TestService.getTest()
    }]);
});
