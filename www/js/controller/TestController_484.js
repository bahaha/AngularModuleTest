define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_484',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 484');
    	$scope.test = TestService.getTest()
    }]);
});
