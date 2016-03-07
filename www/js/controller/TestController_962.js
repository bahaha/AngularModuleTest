define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_962',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 962');
    	$scope.test = TestService.getTest()
    }]);
});
