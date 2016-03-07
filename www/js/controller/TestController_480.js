define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_480',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 480');
    	$scope.test = TestService.getTest()
    }]);
});
