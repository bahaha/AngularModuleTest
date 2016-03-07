define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_432',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 432');
    	$scope.test = TestService.getTest()
    }]);
});
