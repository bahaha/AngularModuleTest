define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_394',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 394');
    	$scope.test = TestService.getTest()
    }]);
});
