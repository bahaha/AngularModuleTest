define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_604',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 604');
    	$scope.test = TestService.getTest()
    }]);
});
