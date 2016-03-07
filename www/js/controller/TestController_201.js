define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_201',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 201');
    	$scope.test = TestService.getTest()
    }]);
});
