define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_116',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 116');
    	$scope.test = TestService.getTest()
    }]);
});
