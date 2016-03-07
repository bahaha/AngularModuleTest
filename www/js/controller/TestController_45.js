define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_45',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 45');
    	$scope.test = TestService.getTest()
    }]);
});
