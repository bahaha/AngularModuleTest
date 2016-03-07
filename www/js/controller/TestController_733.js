define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_733',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 733');
    	$scope.test = TestService.getTest()
    }]);
});
