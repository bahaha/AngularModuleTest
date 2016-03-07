define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_88',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 88');
    	$scope.test = TestService.getTest()
    }]);
});
