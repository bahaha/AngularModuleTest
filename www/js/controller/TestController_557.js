define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_557',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 557');
    	$scope.test = TestService.getTest()
    }]);
});
