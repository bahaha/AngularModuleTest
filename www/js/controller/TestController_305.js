define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_305',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 305');
    	$scope.test = TestService.getTest()
    }]);
});
