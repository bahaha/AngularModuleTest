define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_193',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 193');
    	$scope.test = TestService.getTest()
    }]);
});
