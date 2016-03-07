define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_887',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 887');
    	$scope.test = TestService.getTest()
    }]);
});
