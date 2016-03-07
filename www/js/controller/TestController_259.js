define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_259',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 259');
    	$scope.test = TestService.getTest()
    }]);
});
