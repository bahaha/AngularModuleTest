define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_42',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 42');
    	$scope.test = TestService.getTest()
    }]);
});
