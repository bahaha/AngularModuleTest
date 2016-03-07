define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_401',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 401');
    	$scope.test = TestService.getTest()
    }]);
});
