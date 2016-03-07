define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_241',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 241');
    	$scope.test = TestService.getTest()
    }]);
});
