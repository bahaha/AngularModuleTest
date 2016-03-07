define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_21',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 21');
    	$scope.test = TestService.getTest()
    }]);
});
