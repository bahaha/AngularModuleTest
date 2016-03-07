define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_196',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 196');
    	$scope.test = TestService.getTest()
    }]);
});
