define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_605',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 605');
    	$scope.test = TestService.getTest()
    }]);
});
