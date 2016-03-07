define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_666',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 666');
    	$scope.test = TestService.getTest()
    }]);
});
