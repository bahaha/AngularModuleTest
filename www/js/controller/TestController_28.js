define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_28',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 28');
    	$scope.test = TestService.getTest()
    }]);
});
