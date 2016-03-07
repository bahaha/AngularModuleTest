define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_677',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 677');
    	$scope.test = TestService.getTest()
    }]);
});
