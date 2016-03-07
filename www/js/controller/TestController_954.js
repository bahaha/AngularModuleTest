define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_954',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 954');
    	$scope.test = TestService.getTest()
    }]);
});
