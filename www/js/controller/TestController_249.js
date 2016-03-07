define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_249',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 249');
    	$scope.test = TestService.getTest()
    }]);
});
