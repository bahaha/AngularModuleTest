define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_571',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 571');
    	$scope.test = TestService.getTest()
    }]);
});
