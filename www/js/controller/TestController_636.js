define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_636',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 636');
    	$scope.test = TestService.getTest()
    }]);
});
