define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_309',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 309');
    	$scope.test = TestService.getTest()
    }]);
});
