define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_553',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 553');
    	$scope.test = TestService.getTest()
    }]);
});
