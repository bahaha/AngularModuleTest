define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_627',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 627');
    	$scope.test = TestService.getTest()
    }]);
});
