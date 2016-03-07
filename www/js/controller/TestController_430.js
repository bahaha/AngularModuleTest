define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_430',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 430');
    	$scope.test = TestService.getTest()
    }]);
});
