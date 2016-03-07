define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_10',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 10');
    	$scope.test = TestService.getTest()
    }]);
});
