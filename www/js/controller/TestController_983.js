define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_983',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 983');
    	$scope.test = TestService.getTest()
    }]);
});
