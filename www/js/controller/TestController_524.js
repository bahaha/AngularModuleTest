define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_524',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 524');
    	$scope.test = TestService.getTest()
    }]);
});
