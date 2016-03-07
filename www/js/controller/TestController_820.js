define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_820',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 820');
    	$scope.test = TestService.getTest()
    }]);
});
