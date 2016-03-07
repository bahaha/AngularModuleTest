define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_991',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 991');
    	$scope.test = TestService.getTest()
    }]);
});
