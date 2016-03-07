define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_29',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 29');
    	$scope.test = TestService.getTest()
    }]);
});
