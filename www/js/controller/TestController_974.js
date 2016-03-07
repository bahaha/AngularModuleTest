define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_974',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 974');
    	$scope.test = TestService.getTest()
    }]);
});
