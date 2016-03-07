define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_37',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 37');
    	$scope.test = TestService.getTest()
    }]);
});
