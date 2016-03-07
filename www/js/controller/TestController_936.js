define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_936',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 936');
    	$scope.test = TestService.getTest()
    }]);
});
