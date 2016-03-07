define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_391',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 391');
    	$scope.test = TestService.getTest()
    }]);
});
