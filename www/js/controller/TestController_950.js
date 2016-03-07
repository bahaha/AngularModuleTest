define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_950',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 950');
    	$scope.test = TestService.getTest()
    }]);
});
