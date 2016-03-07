define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_493',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 493');
    	$scope.test = TestService.getTest()
    }]);
});
