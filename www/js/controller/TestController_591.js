define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_591',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 591');
    	$scope.test = TestService.getTest()
    }]);
});
