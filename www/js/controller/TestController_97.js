define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_97',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 97');
    	$scope.test = TestService.getTest()
    }]);
});
