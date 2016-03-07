define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_413',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 413');
    	$scope.test = TestService.getTest()
    }]);
});
