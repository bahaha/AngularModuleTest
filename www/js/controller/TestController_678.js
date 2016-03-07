define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_678',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 678');
    	$scope.test = TestService.getTest()
    }]);
});
