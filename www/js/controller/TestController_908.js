define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_908',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 908');
    	$scope.test = TestService.getTest()
    }]);
});
