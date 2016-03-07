define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_643',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 643');
    	$scope.test = TestService.getTest()
    }]);
});
