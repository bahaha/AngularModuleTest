define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_336',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 336');
    	$scope.test = TestService.getTest()
    }]);
});
