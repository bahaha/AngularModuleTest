define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_368',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 368');
    	$scope.test = TestService.getTest()
    }]);
});
