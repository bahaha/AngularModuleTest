define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_114',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 114');
    	$scope.test = TestService.getTest()
    }]);
});
