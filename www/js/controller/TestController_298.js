define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_298',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 298');
    	$scope.test = TestService.getTest()
    }]);
});
