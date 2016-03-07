define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_958',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 958');
    	$scope.test = TestService.getTest()
    }]);
});
