define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_661',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 661');
    	$scope.test = TestService.getTest()
    }]);
});
