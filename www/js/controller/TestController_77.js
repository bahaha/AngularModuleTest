define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_77',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 77');
    	$scope.test = TestService.getTest()
    }]);
});
