define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_11',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 11');
    	$scope.test = TestService.getTest()
    }]);
});
