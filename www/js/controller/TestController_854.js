define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_854',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 854');
    	$scope.test = TestService.getTest()
    }]);
});
