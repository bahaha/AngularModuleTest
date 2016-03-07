define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_540',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 540');
    	$scope.test = TestService.getTest()
    }]);
});
