define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_6',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 6');
    	$scope.test = TestService.getTest()
    }]);
});
