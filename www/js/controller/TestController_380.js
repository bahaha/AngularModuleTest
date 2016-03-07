define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_380',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 380');
    	$scope.test = TestService.getTest()
    }]);
});
