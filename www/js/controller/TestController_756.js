define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_756',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 756');
    	$scope.test = TestService.getTest()
    }]);
});
