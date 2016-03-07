define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_171',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 171');
    	$scope.test = TestService.getTest()
    }]);
});
