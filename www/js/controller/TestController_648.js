define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_648',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 648');
    	$scope.test = TestService.getTest()
    }]);
});
