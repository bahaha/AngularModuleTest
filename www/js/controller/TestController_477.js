define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_477',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 477');
    	$scope.test = TestService.getTest()
    }]);
});
