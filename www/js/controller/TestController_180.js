define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_180',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 180');
    	$scope.test = TestService.getTest()
    }]);
});
