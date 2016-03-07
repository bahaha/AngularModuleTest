define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_121',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 121');
    	$scope.test = TestService.getTest()
    }]);
});
