define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_976',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 976');
    	$scope.test = TestService.getTest()
    }]);
});
