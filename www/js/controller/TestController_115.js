define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_115',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 115');
    	$scope.test = TestService.getTest()
    }]);
});
