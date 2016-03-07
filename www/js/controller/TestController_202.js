define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_202',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 202');
    	$scope.test = TestService.getTest()
    }]);
});
