define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_783',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 783');
    	$scope.test = TestService.getTest()
    }]);
});
