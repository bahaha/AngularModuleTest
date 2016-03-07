define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_306',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 306');
    	$scope.test = TestService.getTest()
    }]);
});
