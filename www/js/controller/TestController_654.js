define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_654',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 654');
    	$scope.test = TestService.getTest()
    }]);
});
