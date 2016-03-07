define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_951',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 951');
    	$scope.test = TestService.getTest()
    }]);
});
