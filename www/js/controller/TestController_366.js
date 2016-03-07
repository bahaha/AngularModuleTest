define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_366',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 366');
    	$scope.test = TestService.getTest()
    }]);
});
