define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_491',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 491');
    	$scope.test = TestService.getTest()
    }]);
});
