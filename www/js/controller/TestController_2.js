define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_2',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 2');
    	$scope.test = TestService.getTest()
    }]);
});
