define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_337',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 337');
    	$scope.test = TestService.getTest()
    }]);
});
