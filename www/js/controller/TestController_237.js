define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_237',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 237');
    	$scope.test = TestService.getTest()
    }]);
});
