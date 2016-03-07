define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_490',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 490');
    	$scope.test = TestService.getTest()
    }]);
});
