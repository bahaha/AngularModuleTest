define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_451',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 451');
    	$scope.test = TestService.getTest()
    }]);
});
