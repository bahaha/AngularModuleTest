define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_64',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 64');
    	$scope.test = TestService.getTest()
    }]);
});
