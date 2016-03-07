define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_108',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 108');
    	$scope.test = TestService.getTest()
    }]);
});
