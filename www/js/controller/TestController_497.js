define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_497',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 497');
    	$scope.test = TestService.getTest()
    }]);
});
