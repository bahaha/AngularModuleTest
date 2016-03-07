define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_266',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 266');
    	$scope.test = TestService.getTest()
    }]);
});
