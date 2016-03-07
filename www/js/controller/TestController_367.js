define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_367',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 367');
    	$scope.test = TestService.getTest()
    }]);
});
