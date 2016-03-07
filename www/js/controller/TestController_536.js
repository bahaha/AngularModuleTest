define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_536',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 536');
    	$scope.test = TestService.getTest()
    }]);
});
