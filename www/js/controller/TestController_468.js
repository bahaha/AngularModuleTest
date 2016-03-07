define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_468',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 468');
    	$scope.test = TestService.getTest()
    }]);
});
