define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_787',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 787');
    	$scope.test = TestService.getTest()
    }]);
});
