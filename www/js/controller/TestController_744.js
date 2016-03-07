define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_744',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 744');
    	$scope.test = TestService.getTest()
    }]);
});
