define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_943',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 943');
    	$scope.test = TestService.getTest()
    }]);
});
