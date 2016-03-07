define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_389',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 389');
    	$scope.test = TestService.getTest()
    }]);
});
