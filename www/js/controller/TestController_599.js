define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_599',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 599');
    	$scope.test = TestService.getTest()
    }]);
});
