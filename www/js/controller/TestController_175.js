define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_175',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 175');
    	$scope.test = TestService.getTest()
    }]);
});
