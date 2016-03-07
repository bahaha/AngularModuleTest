define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_839',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 839');
    	$scope.test = TestService.getTest()
    }]);
});
