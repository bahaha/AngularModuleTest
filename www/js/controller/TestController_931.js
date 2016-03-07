define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_931',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 931');
    	$scope.test = TestService.getTest()
    }]);
});
