define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_346',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 346');
    	$scope.test = TestService.getTest()
    }]);
});
