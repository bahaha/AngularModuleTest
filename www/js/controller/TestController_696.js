define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_696',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 696');
    	$scope.test = TestService.getTest()
    }]);
});
