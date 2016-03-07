define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_398',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 398');
    	$scope.test = TestService.getTest()
    }]);
});
