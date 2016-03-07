define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_921',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 921');
    	$scope.test = TestService.getTest()
    }]);
});
