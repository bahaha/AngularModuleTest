define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_74',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 74');
    	$scope.test = TestService.getTest()
    }]);
});
