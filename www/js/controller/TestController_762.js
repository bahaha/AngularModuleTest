define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_762',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 762');
    	$scope.test = TestService.getTest()
    }]);
});
