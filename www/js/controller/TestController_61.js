define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_61',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 61');
    	$scope.test = TestService.getTest()
    }]);
});
