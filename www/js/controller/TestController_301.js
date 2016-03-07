define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_301',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 301');
    	$scope.test = TestService.getTest()
    }]);
});
