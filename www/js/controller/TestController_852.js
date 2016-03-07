define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_852',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 852');
    	$scope.test = TestService.getTest()
    }]);
});
