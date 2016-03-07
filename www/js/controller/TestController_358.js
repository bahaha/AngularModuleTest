define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_358',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 358');
    	$scope.test = TestService.getTest()
    }]);
});
