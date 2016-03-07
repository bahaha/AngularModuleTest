define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_649',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 649');
    	$scope.test = TestService.getTest()
    }]);
});
