define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_519',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 519');
    	$scope.test = TestService.getTest()
    }]);
});
