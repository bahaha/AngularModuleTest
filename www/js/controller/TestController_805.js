define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_805',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 805');
    	$scope.test = TestService.getTest()
    }]);
});
