define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_158',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 158');
    	$scope.test = TestService.getTest()
    }]);
});
