define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_79',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 79');
    	$scope.test = TestService.getTest()
    }]);
});
