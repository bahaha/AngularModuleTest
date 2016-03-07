define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_75',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 75');
    	$scope.test = TestService.getTest()
    }]);
});
