define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_56',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 56');
    	$scope.test = TestService.getTest()
    }]);
});
