define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_165',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 165');
    	$scope.test = TestService.getTest()
    }]);
});
