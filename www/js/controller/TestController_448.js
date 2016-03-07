define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_448',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 448');
    	$scope.test = TestService.getTest()
    }]);
});
