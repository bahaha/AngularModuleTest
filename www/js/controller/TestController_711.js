define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_711',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 711');
    	$scope.test = TestService.getTest()
    }]);
});
