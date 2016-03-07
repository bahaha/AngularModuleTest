define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_410',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 410');
    	$scope.test = TestService.getTest()
    }]);
});
