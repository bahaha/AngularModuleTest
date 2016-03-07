define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_240',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 240');
    	$scope.test = TestService.getTest()
    }]);
});
