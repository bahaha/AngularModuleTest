define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_378',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 378');
    	$scope.test = TestService.getTest()
    }]);
});
