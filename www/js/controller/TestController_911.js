define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_911',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 911');
    	$scope.test = TestService.getTest()
    }]);
});
