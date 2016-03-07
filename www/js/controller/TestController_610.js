define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_610',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 610');
    	$scope.test = TestService.getTest()
    }]);
});
