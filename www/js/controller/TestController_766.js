define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_766',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 766');
    	$scope.test = TestService.getTest()
    }]);
});
