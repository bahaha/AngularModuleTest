define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_984',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 984');
    	$scope.test = TestService.getTest()
    }]);
});
