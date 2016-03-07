define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_903',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 903');
    	$scope.test = TestService.getTest()
    }]);
});
