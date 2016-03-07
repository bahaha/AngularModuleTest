define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_646',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 646');
    	$scope.test = TestService.getTest()
    }]);
});
