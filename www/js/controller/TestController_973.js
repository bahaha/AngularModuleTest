define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_973',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 973');
    	$scope.test = TestService.getTest()
    }]);
});
