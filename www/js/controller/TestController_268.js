define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_268',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 268');
    	$scope.test = TestService.getTest()
    }]);
});
