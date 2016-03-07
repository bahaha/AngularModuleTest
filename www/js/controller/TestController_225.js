define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_225',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 225');
    	$scope.test = TestService.getTest()
    }]);
});
