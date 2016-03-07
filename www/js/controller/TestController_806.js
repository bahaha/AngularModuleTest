define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_806',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 806');
    	$scope.test = TestService.getTest()
    }]);
});
