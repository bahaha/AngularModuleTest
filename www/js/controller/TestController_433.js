define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_433',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 433');
    	$scope.test = TestService.getTest()
    }]);
});
