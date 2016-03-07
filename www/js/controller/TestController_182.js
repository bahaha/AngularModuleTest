define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_182',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 182');
    	$scope.test = TestService.getTest()
    }]);
});
