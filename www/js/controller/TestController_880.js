define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_880',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 880');
    	$scope.test = TestService.getTest()
    }]);
});
