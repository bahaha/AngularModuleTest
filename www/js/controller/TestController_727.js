define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_727',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 727');
    	$scope.test = TestService.getTest()
    }]);
});
